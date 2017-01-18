// jshint esversion: 6

import module from './post.module';
import template from './post.html';

const name = 'post';

module.component(name, {
  template,
  bindings: {
    post: "<"
  }
});
