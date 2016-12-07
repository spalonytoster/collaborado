// jshint esversion: 6

import module from './sidebar.module';
import template from './sidebar.html';
import data from './data.json';
import _ from 'lodash';

function extractElements(groups) {
  let elements = [];
  _.forEach(groups, (group, name) => {
    elements.push({
      id: name,
      name: group.displayName
    });
  });
  return elements;
}

class Sidebar {
  constructor($state, $stateParams) {
    'ngInject';

    this.$onInit = () => {

      // mock data
      this.user = {
        login: "spalonytoster",
        name: "Maciej",
        surname: "Posłuszny",
        get displayName() {
          return `${this.name} ${this.surname}`;
        }
      };

      // end

      this.groups = extractElements(data);

      // if there is no groups, we don't do anything
      if (this.groups.length === 0) return;

      this.selectedGroup = _.find(this.groups, (group) => {
        return group.id === $stateParams.groupName;
      });

      if (!this.selectedGroup) {
        console.log('There is no such group: ' + $stateParams.groupName);
        return;
      }

      this.channels = extractElements(data[this.selectedGroup.id].channels);
      this.selectedChannel = _.find(this.channels, (channel) => {
        return channel.id === $stateParams.channelName;
      });
    };

    this.handleRedirect = () => {
      if (this.selectedChannel) {
        $state.go('channel', {
          groupName: this.selectedGroup.id,
          channelName: this.selectedChannel.id
        });
      }
      else if (this.selectedGroup) {
        $state.go('group', {
          groupName: this.selectedGroup.id
        });
      }
    };
  }

  selectGroup(event) {
    this.selectedGroup = event.selected;
    this.channels = extractElements(data[this.selectedGroup.id].channels);
    delete this.selectedChannel;

    // setting timeout for animation to finish
    setTimeout(() => {
      this.handleRedirect();
    }, 500);
  }

  selectChannel(event) {
    this.selectedChannel = event.selected;

    // setting timeout for animation to finish
    setTimeout(() => {
      this.handleRedirect();
    }, 500);
  }

  checkUserChannelCreationPermission() {
    // TODO: na sztywno pobierany jest login usera zdefiniowanego dla prototypu
    // trzeba zamienic na user._id po podpieciu backendu
    return _.includes(data[this.selectedGroup.id].administrators, this.user.login);
  }
}

const name = 'sidebar';

module.component(name, {
  template,
  controller: Sidebar
});
