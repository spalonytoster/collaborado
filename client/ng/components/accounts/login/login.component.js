// jshint esversion: 6

import Login from './login.module';
import template from './login.html';
import {
    account
} from '../accounts.js';

class LoginForm {
    constructor($state) {
        'ngInject';
        this.user = {};

    }

    submit() {
        for (let i = 0; i < account.length; i++) {
            if ((this.user.email === account[i].email) && (this.user.password === account[i].pass)) {
                console.log("Logged as " + this.user.email);
              //  $state.go("dashboard");
                break;
            } else if ((i + 1) === account.length) {
                document.getElementById("message-span").innerHTML = "Wrong Email or Password";
                document.getElementById("message-span").style.color = "red";
            }
        }

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
