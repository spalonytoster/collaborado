// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { Posts as PostsApi } from '/imports/api/posts';

class Posts {
  constructor($scope, $reactive) {
    'ngInject';

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

    this.body = "";
    this.tags = [];
    this.attachments = [];
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
