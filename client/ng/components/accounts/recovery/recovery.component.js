// jshint esversion: 6
import Recovery from './recovery.module';
import { Accounts } from 'meteor/accounts-base';
import template from './recovery.html';

class Recover {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);

    this.credentials = {
      email: ''
    };

    this.message = '';
  }

  reset() {
    Accounts.forgotPassword(this.credentials, this.$bindToContext((err) => {
      if (err) {
        this.message = err.reason;
      } else {
        this.message = "Please check your mail";

      }
      this.credentials.email="";
    }));
  }
}

const name = 'recovery';

// create a module
  Recovery.component(name, {
    template,
    controller: Recover
  })
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('recovery', {
    url: '/recovery',
    template: '<recovery></recovery>'
  });
}
