// jshint esversion: 6
import module from './menu-header.module';
import template from './menu-header.html';
import { Meteor } from 'meteor/meteor';
import { UserSettings } from '/imports/api/user-settings';

class MenuHeader {
  constructor($mdDialog, $scope, $reactive) {
    'ngInject';
    this._mdDialog = $mdDialog;

    $reactive(this).attach($scope);

    this.helpers({
      email() {
        if (!_.isObject(Meteor.user())) { return null; }
        return _.first(Meteor.user().emails).address;
      },
      displayName() {
        if (!_.isObject(Meteor.user())) { return null; }
        let profile = Meteor.user().profile;
        return `${profile.name} ${profile.surname}`;
      },
      avatar() {
        let settings = UserSettings.findOne({ userId: Meteor.userId() });
        if (!_.isObject(settings)) { return undefined; }
        return settings.account.avatar.data;
      },
      login() {
        if (!_.isObject(Meteor.user())) { return null; }
        return Meteor.user().profile.login;
      }
    });
  }

  openSettings(event) {
    let config = {
      parent: angular.element(document.body),
      targetEvent: event,
      template: `
        <application-settings></application-settings>
      `,
      hasBackdrop: true,
      // position: position,
      trapFocus: true,
      clickOutsideToClose: false,
      escapeToClose: true,
      focusOnOpen: true
    };
    this._mdDialog.show(config);
  }
}

const name = 'menuHeader';

module.component(name, {
  controller: MenuHeader,
  bindings: {
    user: "<"
  },
  template
});
