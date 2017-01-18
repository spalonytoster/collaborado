// jshint esversion: 6

import module from './newpost.module';
import template from './newpost.html';
import { Posts as PostsApi } from '/imports/api/posts';
import { Post_files as Post_filesApi } from '/imports/api/post_files';


class NewPost {
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

const name = 'newpost';

module.component(name, {
  template,
  controller: NewPost
});
