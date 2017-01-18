// jshint esversion: 6
import module from './menu-header.module';
import template from './menu-header.html';
import { Meteor } from 'meteor/meteor';

class MenuHeader {
  constructor($mdDialog, $scope, $reactive) {
    'ngInject';
    this._mdDialog = $mdDialog;

    $reactive(this).attach($scope);

    this.helpers({
      isLoggedIn() {
        return _.isString(Meteor.userId());
      },
      currentUser() {
        return Meteor.user();
      },
      email() {
        if (_.isUndefined(Meteor.user())) { return undefined; }
        return _.first(Meteor.user().emails).address;
      },
      displayName() {
        if (_.isUndefined(Meteor.user())) { return undefined; }
        let profile = Meteor.user().profile;
        return `${profile.name} ${profile.surname}`;
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
