// jshint esversion: 6

import module from './new-message.module';
import template from './new-message.html';

class NewMessage {
  constructor() {
    'ngInject';
    this.messages = [
      {
        author: 'Paweł Wilamowski',
        body: 'Lorem ipsum gipsum',
        created: '4h ago'
      }
    ];
  }
}

const name = 'new-message';

module.component(name, {
  bindings: {
    newMessage: '<'
  },
  template,
  controller: NewMessage
});