// jshint esversion: 6

import Login from './login.module';
import template from './login.html';
import {
    account
} from '../accounts.js';

class LoginForm {
    constructor($state,$scope) {
        'ngInject';
        this.user = {};

        this.goToDashboard = () => {
         $state.go("dashboard");
       };
    }

    submit(valid) {
      var message;

      if (valid){
        let user=this.user;
        let route=this;

        account.forEach(function(item,i) {
            if ((user.email === item.email) && (user.password === item.pass)) {
                console.log("Logged as " + user.email);
                route.goToDashboard();
            } else if ((i+1) === account.length) {
              message="Wrong user or password!";
            }
        });

    }else{
        message="Please enter valid data!";
    }
    this.message=message;
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
