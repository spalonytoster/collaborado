// jshint esversion: 6

import module from './menu-header.module';
import template from './menu-header.html';

class MenuHeader {
  constructor() {
    'ngInject';


  }
}

const name = 'menuHeader';

module.component(name, {
  bindings: {
    user: "<"
  },
  template,
  controller: MenuHeader
});
