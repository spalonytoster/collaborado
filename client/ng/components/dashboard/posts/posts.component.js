// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { postBase } from './posts.js';

class Posts {
  constructor($scope) {
    'ngInject';

    this.$onInit = () => {
      this.init();
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
    this.posts = postBase;
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
    let newPost = {
      love: 0,
      talk: 0,
      tags: tags,
      text: this.body,
      files: "",
      time: "Just now",
      pinned: false,
      attachments: this.files
    };

    console.log(this.uploadedFile);

    postBase.push(newPost);
    this.body = "";
    this.tags = [];
    this.attachments = [];
  }

  pinup(post) {
    for (i = 0; i < postBase.length; i++) {
      if (postBase[i]._id === post._id && post.pinned === false) {
        post.pinned = true;
        if (i !== 0) {
          postBase.splice(i, 1);
          postBase.unshift(post);
        }
        break;
      } else if (postBase[i]._id === post._id && post.pinned === true) {
        post.pinned = false;
        if ((i + 1) !== postBase.length) {
          postBase.splice(i, 1);
          postBase.push(post);
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
    console.log(file);
    this.attachments.push(file);
    delete this.uploadedFile;
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
