// jshint esversion: 6
import template from './avatar-upload.html';
import module from './avatar-upload.module';
import { Meteor } from 'meteor/meteor';
import { UserSettings } from '/imports/api/user-settings';

class AvatarUpload {
  constructor($scope, $reactive, $state, $timeout) {
    'ngInject';

    $reactive(this).attach($scope);
    this._timeout = $timeout;

    this.$onInit = () => {
      this.helpers({
        settings() {
          return UserSettings.findOne({ userId: Meteor.userId() });
        }
      });
      this.uploadedAvatar = this.settings.account.avatar;
    };

    $scope.$watch((scope) => {
      return this.uploadedAvatar;
    }, (file, oldFile) => {
      if (file && file !== oldFile) {
        this.submitAvatar();
      }
    });

    this.goToLogin = () => {
      $state.go('login');
    };
  }

  displayName() {
    let profile = Meteor.user().profile;
    return `${profile.name} ${profile.surname}`;
  }

  avatar() {
    if (this.uploadedAvatar) {
      return this.uploadedAvatar.data;
    }
    else {
      return '/images/avatar.png';
    }
  }

  submitAvatar() {
    UserSettings.update({ _id: this.settings._id }, {
       $set: { 'account.avatar': this.uploadedAvatar
     }});
  }

  logout() {
    this.close();
    this._timeout(() => {
      this.goToLogin();
      Accounts.logout();
    }, 300);
  }
}

const name = 'avatarUpload';

export default module.component(name, {
  template,
  controller: AvatarUpload,
  bindings: {
    close: '&'
  }
});
