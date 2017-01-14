// jshint esversion: 6
import module from './auth.module';
import template from './auth.html';

import { Accounts } from 'meteor/accounts-base';

class Auth {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      isLoggedIn() {
        return !!Meteor.userId();
      },
      currentUser() {
        return Meteor.user();
      }
    });
  }

  logout() {
    Accounts.logout();
  }
}

const name = 'auth';

module.component(name, {
  template,
  controller: Auth
});
