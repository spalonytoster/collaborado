// jshint esversion: 6
import template from './tab-general.html';
import module from './tab-general.module';
import { UserSettings } from '/imports/api/user-settings';
import { Themes } from '/imports/api/themes';

class TabGeneral {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.$onInit = () => {
      this.userId = "1";

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
    UserSettings.update({ _id: this.settings._id }, this.settings);
  }
}

const name = 'tabGeneral';

export default module.component(name, {
  template,
  controller: TabGeneral
});
