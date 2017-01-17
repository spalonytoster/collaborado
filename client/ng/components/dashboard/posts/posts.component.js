// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { Posts as PostsApi } from '/imports/api/posts';
import { Post_files as Post_filesApi } from '/imports/api/post_files';


class Posts {
  constructor($scope, $reactive, $mdDialog) {
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
   }

  init() {
    this.body = "";
    this.tags = "";
    this.tags = [];
    this.posttags="";

    this.attachments = [];
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

}

const name = 'posts';

module.component(name, {
  template,
  controller: Posts
});
