// jshint esversion: 6

import Login from './login.module';
import template from './login.html';

const name = 'login';


Login.component(name, {
  template
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
