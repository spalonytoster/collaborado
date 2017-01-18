// jshint esversion: 6
import kebabCase from 'lodash/kebabCase';
import template from './create-channel.html';
import module from './create-channel.module';
import { Groups } from '/imports/api/groups';

class CreateChannel {
  constructor() {
    'ngInject';

    this.$onInit = () => {
      this.channel = {
        get id() {
          return kebabCase(this.name);
        }
      };
      this.placeholder = {
        name: "Offtopic",
        get id() {
          return kebabCase(this.name);
        },
        description: "What is this channel for?"
      };
    };
  }

  submit(valid) {
    if (!valid) return;
    let channel = {
      id: this.channel.id,
      name: this.channel.name
    };

    if(_.isObject(Groups.findOne({_id: this.groupId, 'channels.id': channel.id}))) {
      console.log('channel already exists in this group!');
      return false;
    }

    Groups.update({ _id: this.groupId }, { $push: { channels: channel }});
    this.close();
  }

  close() {
    let panelRef = this.panelRef;
    if (!panelRef) return;
    panelRef.close().then(() => {
      panelRef.destroy();
    });
  }
}

const name = 'createChannel';

export default module.component(name, {
  template,
  controller: CreateChannel,
  bindings: {
    panelRef: "<",
    groupId: '@'
  }
});
