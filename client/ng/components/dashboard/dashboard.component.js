// jshint esversion: 6
import Dashboard from './dashboard.module';
import template from './dashboard.html';
import { Meteor } from 'meteor/meteor';

class Collaborado {
  constructor($scope, $mdSidenav, $state) {
    'ngInject';

    if (_.isNull(Meteor.userId())) {
      $state.go('login');
    }

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
    .state('channel', {
      url: '/group/:groupId/:channelId',
      template: '<dashboard></dashboard>'
    });

  $stateProvider
    .state('group', {
      url: '/group/:groupId',
      template: '<dashboard></dashboard>'
    });

    $stateProvider
    .state('dashboard', {
      url: '/',
      template: '<dashboard></dashboard>'
    });
}
