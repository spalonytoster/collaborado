// jshint esversion: 6

import module from './menu-link.module';
import template from './menu-link.html';

class MenuLink {
  constructor() {
    'ngInject';

  }
}

const name = 'menuLink';

module.component(name, {
  bindings: {
    link: '<'
  },
  template,
  controller: MenuLink
});
