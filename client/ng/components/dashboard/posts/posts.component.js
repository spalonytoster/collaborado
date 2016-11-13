// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';

class Posts {
  constructor() {
    'ngInject';

  }
}

const name = 'posts';

module.component(name, {
  template,
  controller: Posts
});
