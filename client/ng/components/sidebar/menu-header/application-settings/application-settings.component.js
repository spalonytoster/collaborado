// jshint esversion: 6
import template from './application-settings.html';
import module from './application-settings.module';
import { UserSettings } from '/imports/api/user-settings';
import { Themes } from '/imports/api/themes';

class ApplicationSettings {
  constructor($scope, $reactive, $timeout) {
    'ngInject';

    this._timeout = $timeout;

    $reactive(this).attach($scope);

    this.$onInit = () => {
      this.userId = "1";
      this.isBioEditable = false;

      this.availableLanguages = [{
        _id: "1",
        name: "English"
      }, {
        _id: "2",
        name: "Polski"
      }];

      this.helpers({
        settings() {
          return UserSettings.findOne({ userId: this.userId });
        },
        availableThemes() {
          return Themes.find({ active: true });
        }
      });
      this.uploadedAvatar = this.settings.account.avatar;
      console.log(this.uploadedAvatar);
    };

    $scope.$watch((scope) => {
      return this.uploadedAvatar;
    }, (file, oldFile) => {
      if (file && file !== oldFile) {
        this.submitAvatar();
        console.log(file);
      }
    });
  }

  close() {
    let panelRef = this.panelRef;
    if (!panelRef) return;
    panelRef.close().then(() => {
      panelRef.destroy();
    });
  }

  submit() {
    UserSettings.update({ _id: this.settings._id }, this.settings);
  }

  submitBio(form) {
    if (!form.$valid) return false;
    let bio = this.settings.account.bio;
    UserSettings.update({ _id: this.settings._id }, { $set: { "account.bio": bio }});
    this.isBioEditable = false;
  }

  editBio() {
    this.isBioEditable = true;
    this.oldBio = this.settings.account.bio;
  }

  cancelBio(form) {
    this.isBioEditable = false;

    // http://stackoverflow.com/a/36695363/4150933
    this.settings.account.bio = null;
    form.$setPristine();
    form.$setValidity();
    form.$setUntouched();
    this._timeout(() => {
      this.settings.account.bio = this.oldBio;
      delete this.oldBio;
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

const name = 'applicationSettings';

export default module.component(name, {
  template,
  controller: ApplicationSettings,
  bindings: {
    panelRef: "<"
  }
});
