// jshint esversion: 6
import template from './avatar-upload.html';
import module from './avatar-upload.module';
import { UserSettings } from '/imports/api/user-settings';

class AvatarUpload {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.$onInit = () => {
      this.userId = "1";

      this.helpers({
        settings() {
          return UserSettings.findOne({ userId: this.userId });
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
  }

  getAvatar() {
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
}

const name = 'avatarUpload';

export default module.component(name, {
  template,
  controller: AvatarUpload
});
