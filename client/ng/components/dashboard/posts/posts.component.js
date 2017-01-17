// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { Posts as PostsApi } from '/imports/api/posts';
import { Post_files as Post_filesApi } from '/imports/api/post_files';


class Posts {
  constructor($scope, $reactive, $mdDialog) {
    'ngInject';

    this.showAlert = () => {
      $mdDialog.show(
        $mdDialog.alert()

       .clickOutsideToClose(true)
       .title("Files to big !")
       .textContent('Due to our server limits files are restricted to 50Mb.')
       .ariaLabel('Alert Dialog Demo')
       .ok('Got it!')
     );
   };

    $reactive(this).attach($scope);

    this.$onInit = () => {
      this.init();

      this.helpers({
        posts() {
          return PostsApi.find();
        }
      });
    };

    $scope.$watch((scope) => {
      return this.uploadedFile;
    }, (file) => {
      this.handleUploadFile(file);
    });
  }



  init() {
    this.body = "";
    this.tags = "";
    this.tags = [];
    this.posttags="";

    this.attachments = [];
  }

  checkText() {
    if ((this.body.length > 0) && (this.body.length <150)) {
      return false;
    } else {
      return true;
    }
  }

  submit() {
    let tags = this.tags;
    let att = [];
    let attach = angular.toJson(this.attachments);
    this.attachments = angular.fromJson(attach);

    this.attachments.forEach((index) => {

      let createPostFile = (callback) => {
        let newFile = {
          lastModified: index.lastModified,
          lastModifiedDate: index.lastModifiedDate,
          name: index.name,
          size: index.size,
          data: index.data
        };
        callback(newFile);
      };


      let insertPostFile = (uploadfile) => {
        let insert_id = Post_filesApi.insert(uploadfile);
        preparePost(insert_id);
      };

      let preparePost = (insertid) => {
        let post_file = {
          id: insertid,
          name: index.name
        };
        att.push(post_file);
      };

      createPostFile(insertPostFile);

    });

    let newPost = {
      love: 0,
      talk: 0,
      tags: tags,
      text: this.body,
      time: "Just now",
      pinned: false,
      attachments: att
    };

    this.body = "";
    this.tags = [];
    this.filedata ="";
    this.attachments = [];

    PostsApi.insert(newPost);
  }

  getPostFile(attachmentid){
      let getfile = Post_filesApi.findOne({ _id: attachmentid });
      this.filedata = getfile.data;
  }

  pinup(post) {
    let posts = this.posts;
    for (i = 0; i < posts.length; i++) {
      if (posts[i]._id === post._id && post.pinned === false) {
        post.pinned = true;
        if (i !== 0) {
          posts.splice(i, 1);
          posts.unshift(post);
        }
        break;
      } else if (posts[i]._id === post._id && post.pinned === true) {
        post.pinned = false;
        if ((i + 1) !== posts.length) {
          posts.splice(i, 1);
          posts.push(post);
        }
        break;
      }
    }
  }

  isTagged(tags){
    if (tags[0]===undefined){
      return false;
    }
    this.posttags="tags: "+tags.join();
    return true;
  }


  love(post) {
    if (post.loved === true) {
      post.love--;
      post.loved = false;
    } else {
      post.love++;
      post.loved = true;
    }
  }


  handleUploadFile(file) {
    if (!file) return;
    var sum=file.size;

    this.attachments.forEach((element,index) => {
      sum=sum+element.size;
    });

    if(sum <= 50*1024*1024 ){
      if(this.attachments.findIndex(x => x.name === file.name) === -1){
        this.attachments.push(file);
      }
    } else {
       this.showAlert();
    }
    delete this.uploadedFile;
    document.getElementById("file-upload").value = "";
  }

  removeFile(removedFile) {
     this.attachments = _.without(this.attachments,
       _.findWhere(this.attachments, { name: removedFile.name })
     );
  }
}

const name = 'posts';

module.component(name, {
  template,
  controller: Posts
});
