// jshint esversion: 6
import module from './post.module';
import template from './post.html';
import { Post_files as Post_filesApi } from '/imports/api/post_files';
import { Meteor } from 'meteor/meteor';
import { UserSettings } from '/imports/api/user-settings';

class Post {
  constructor($scope, $reactive, $mdDialog) {
    'ngInject';

    $reactive(this).attach($scope);

    this.showAlert = () => {
      $mdDialog.show(
        $mdDialog.alert()
        .clickOutsideToClose(true)
        .title("Files too big!")
        .textContent('Due to our server limits files are restricted to 50Mb.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
      );
    };

    this.helpers({
      author() {
        if (!this.post) return undefined;
        return Meteor.users.findOne({_id: this.post.author._id});
      },
      avatar() {
        let settings = UserSettings.findOne({ userId: Meteor.userId() });
        if (!_.isObject(settings)) { return undefined; }
        return settings.account.avatar.data;
      }
    });
   }

  getPostFile(attachmentid){
      let getfile = Post_filesApi.findOne({ _id: attachmentid });
      this.filedata = getfile.data;
  }

  pinup(post) {
    this.onPinup({
      $event: {
        postId: post._id
      }
    });
  }

  isTagged(tags) {
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

const name = 'post';

module.component(name, {
  template,
  controller: Post,
  bindings: {
    post: "<",
    onPinup: '&'
  }
});
