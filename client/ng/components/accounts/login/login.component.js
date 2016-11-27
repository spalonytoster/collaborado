// jshint esversion: 6

import Login from './login.module';
import template from './login.html';
import { account } from './accounts.js';
console.log(account);
class LoginForm {
  constructor() {
   this.user = {};
  }

  submit() {
    console.log(this.user);
  }
}

const name = 'login';


Login.component(name, {
  template,
  controller: LoginForm
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    });
}
