// jshint esversion: 6

import register from './register.module';
import template from './register.html';
import {
    account
} from '../accounts.js';

class RegisterForm {
    constructor() {
        this.user = {};
    }

    submit() {
        if (this.user.password === this.user.password2) {
            var Object = {
                email: this.user.email,
                pass: this.user.password
            };
            account.push(Object);
            document.getElementById("message-span").innerHTML = "Account Created";
            document.getElementById("message-span").style.color = "green";
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
