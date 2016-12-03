// jshint esversion: 6

import Dashboard from './dashboard.module';
import template from './dashboard.html';

class Collaborado {
  constructor($scope, $mdSidenav) {
    'ngInject';

    this.toggleSidebar = () => {
      $mdSidenav('left').toggle();
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
    .state('groupChannel', {
      url: '/group/:groupName/:channelName',
      template: '<dashboard></dashboard>'
    });

  $stateProvider
    .state('group', {
      url: '/group/:groupName',
      template: '<dashboard></dashboard>'
    });

    $stateProvider
    .state('dashboard', {
      url: '/',
      template: '<dashboard></dashboard>'
    });
}
