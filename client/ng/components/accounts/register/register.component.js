// jshint esversion: 6

import register from './register.module';
import template from './register.html';
import { account } from '../accounts.js';

class RegisterForm {
  constructor($state) {
    'ngInject';
    this.user = {};

    this.goToLogin = () => {
    $state.go("login");
    };
  }

    submit(valid) {
      let message;
      console.log(this.user.terms);

      if (valid){
        if (this.user.password === this.user.password2) {
          let newAccount = {
            email: this.user.email,
            pass: this.user.password,
            personal: this.user.name +" "+this.user.surname
          };
          account.push(newAccount);
          console.log(account);
          this.goToLogin();
        } else {
          message = "Password not match";
        }
      } else {
        message = "Please enter valid data and accept terms!";
      }

    this.message = message;
    }

}

const name = 'register';

register.component(name, {
        template,
        controller: RegisterForm
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('register', {
            url: '/register',
            template: '<register></register>'
        });
}
