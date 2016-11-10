// jshint esversion: 6

import app from '../../app.module.js';
import template from './collaborado.html';

class Collaborado {
  constructor($scope, $mdSidenav) {
    'ngInject';

    this.toggleSidebar = () => {
      $mdSidenav('sidebar').toggle();
    };
  }
}

const name = 'collaborado';

app.component(name, {
  template,
  controller: Collaborado
});
