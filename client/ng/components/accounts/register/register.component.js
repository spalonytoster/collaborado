// jshint esversion: 6
// jshint esversion: 6

import register from './register.module';
import template from './register.html';

class Collaborado {
  constructor($scope, $mdSidenav) {
    'ngInject';

    this.toggleSidebar = () => {
      $mdSidenav('sidebar').toggle();
    };
  }
}

const name = 'register';

register.component(name, {
  template,
  controller: Collaborado
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
