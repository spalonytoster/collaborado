// jshint esversion: 6

import module from './live-chat.module';
import template from './live-chat.html';

class LiveChat {
  constructor($mdDialog) {
    'ngInject';
    this._mdDialog = $mdDialog;
     this.$onInit = () => {
      this.messages = [
        {
          author: 'Paweł Wilamowski',
          body: 'Lorem ipsum gipsum',
          created: '4h ago'
        }, {
          author: 'Maciej Posłuszny',
          body: 'Lorem ipsum gipsum',
          created: '4h ago'
        }, {
          author: 'Karol Tymiński',
          body: 'Lorem ipsum gipsum',
          created: '4h ago'
        }, {
          author: 'Lechu Wałęsa',
          body: 'Lorem ipsum gipsum',
          created: '4h ago'
        }, {
          author: 'Andrzej Duda',
          body: 'Lorem ipsum gipsum',
          created: '4h ago'
        }
      ];

       this.newMessage = {};
     };
  }

  sendMessage() {
    console.log(this.newMessage);
    this.newMessage.author = 'current user';
    this.newMessage.created = '1m ago';
    this.messages.push(this.newMessage);
    this.newMessage = {};
  }
}

const name = 'liveChat';

module.component(name, {
  template,
  controller: LiveChat
});
