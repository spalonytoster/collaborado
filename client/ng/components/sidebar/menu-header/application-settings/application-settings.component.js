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
          return UserSettings.find({ userId: this.userId }).fetch()[0];
        },
        availableThemes() {
          return Themes.find({ active: true });
        }
      });
    };
  }

  submitBio(form) {
    if (!form.valid) return false;
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

  submit() {
    console.log(this.settings);
    UserSettings.update({ _id: this.settings._id }, this.settings);
  }

  close() {
    let panelRef = this.panelRef;
    if (!panelRef) return;
    panelRef.close().then(() => {
      panelRef.destroy();
    });
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
