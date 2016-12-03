// jshint esversion: 6

import module from './menu-toggle.module';
import template from './menu-toggle.html';
import _ from 'lodash';

class MenuToggle {
  constructor() {
    'ngInject';

    this.$onInit = () => {
      this.id = _.kebabCase(this.name);
      this.toggled = true;
    };
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}

const name = 'menuToggle';

module.component(name, {
  bindings: {
    name: '@',
    children: '<'
  },
  template,
  controller: MenuToggle
});
