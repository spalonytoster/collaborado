// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { Posts as PostsApi } from '/imports/api/posts';


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
          console.log(PostsApi._collection);
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

    this.attachments = [];

  }

  checkText() {
    if (this.body.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  submit() {
    let tags = this.tags.join(', ');
    let attach = angular.toJson(this.attachments);
    let att = angular.fromJson(attach);
    console.log(att);
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
    this.attachments = [];
    console.log(newPost);
    return PostsApi.insert(newPost);

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
        console.log(this.attachments);
        console.log(file);
      if(this.attachments.findIndex(x => x.name === file.name) === -1){
        // let newdata = file.data.split(",");
        // newdata=newdata.unshift("file://");
        // file.data=newdata.join();
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
