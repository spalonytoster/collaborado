// jshint esversion: 6

import Dashboard from './dashboard.module';
import template from './dashboard.html';

class Collaborado {
  constructor($scope, $mdSidenav) {
    'ngInject';

    this.toggleSidebar = () => {
      $mdSidenav('sidebar').toggle();
    };
  }
}

const name = 'dashboard';

Dashboard.component(name, {
  template,
  controller: Collaborado
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>'
    });
}
