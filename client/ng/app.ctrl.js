// jshint esversion :6
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import module from './app.module';
import { UserSettings } from '/imports/api/user-settings';

class AppCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.$onInit = () => {
      this.userId = '1';
      this.helpers({
        settings() {
          return UserSettings.findOne({ userId: this.userId });
        }
      });
    };
  }
}

module.controller('AppCtrl', AppCtrl);
