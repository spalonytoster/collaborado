// jshint esversion: 6

import module from './live-chat.module';
import template from './live-chat.html';

class LiveChat {
    constructor() {
        'ngInject';

    }
}

const name = 'live-chat';

module.component(name, {
    template,
    controller: LiveChat
});
