// jshint esversion: 6

import register from './register.module';
import template from './register.html';
import { account } from '../accounts.js';
import { Accounts } from 'meteor/accounts-base';

class RegisterForm {
  constructor($scope, $reactive, $state) {
   'ngInject';

    $reactive(this).attach($scope);

    this.user = {};

    this.goToLogin = () => {
      $state.go("login");
    };
  }

    submit(valid) {
      let message;

      if (valid){
        if (this.user.password === this.user.password2) {
          let newAccount = {
            email: this.user.email,
            password: this.user.password,
            personal: this.user.name +" "+this.user.surname
          };

          Accounts.createUser(newAccount, this.$bindToContext((err) => {
            if (err) {
              this.message = err.message;
            } else {
              this.goToLogin();
            }
          })
        );


        } else {
          this.message = "Password not match";
        }
      } else {
        this.message = "Please enter valid data and accept terms!";
      }
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
