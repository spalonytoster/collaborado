// jshint esversion: 6
import template from './application-settings.html';
import module from './application-settings.module';
import { UserSettings } from '/imports/api/user-settings';
import { Themes } from '/imports/api/themes';

class ApplicationSettings {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.$onInit = () => {
      this.userId = 1;

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
    };
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
