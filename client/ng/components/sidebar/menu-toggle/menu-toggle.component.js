// jshint esversion: 6

import module from './menu-toggle.module';
import template from './menu-toggle.html';

class MenuToggle {
  constructor() {
    'ngInject';

  }
}

const name = 'menuToggle';

module.component(name, {
  template,
  controller: MenuToggle
});
