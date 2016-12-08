// jshint esversion: 6

import module from './message.module';
import template from './message.html';

const name = 'message';

module.component(name, {
  bindings: {
    message: '<'
  },
  template
});