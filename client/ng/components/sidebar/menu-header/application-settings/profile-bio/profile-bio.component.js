// jshint esversion: 6
import template from './profile-bio.html';
import module from './profile-bio.module';
import { UserSettings } from '/imports/api/user-settings';

class ProfileBio {
  constructor($scope, $reactive, $timeout) {
    'ngInject';

    $reactive(this).attach($scope);

    this._timeout = $timeout;

    this.$onInit = () => {
      this.userId = "1";
      this.isBioEditable = false;

      this.helpers({
        settings() {
          return UserSettings.findOne({ userId: this.userId });
        }
      });
    };
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
    // form.$setValidity();
    form.$setUntouched();
    this._timeout(() => {
      this.settings.account.bio = this.oldBio;
      delete this.oldBio;
    });
  }
}

const name = 'profileBio';

export default module.component(name, {
  template,
  controller: ProfileBio
});
