// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { Posts as PostsApi } from '/imports/api/posts';

class Posts {
  constructor($scope, $reactive, $mdDialog) {
    'ngInject';

    $reactive(this).attach($scope);

    this.$onInit = () => {
      this.helpers({
        posts() {
          return PostsApi.find();
        }
      });
    };
  }

  pinup($event) {
    let posts = this.posts;
    let post = _.findWhere(posts, { _id: $event.postId });
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
}

const name = 'posts';

module.component(name, {
  template,
  controller: Posts
});
