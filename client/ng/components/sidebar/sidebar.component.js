// jshint esversion: 6
import module from './sidebar.module';
import template from './sidebar.html';
import data from './data.json';
import _ from 'lodash';

function extractElements(elements) {
  let result = [];
  _.each(elements, (element, name) => {
    result.push({
      id: name,
      name: element.displayName
    });
  });
  return result;
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

      this.initGroups($stateParams);
      this.initChannels($stateParams);
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

  initGroups($stateParams) {
    this.groups = extractElements(data);
    if (this.groups.length === 0) return;

    if ($stateParams.groupName) {
      this.selectedGroup = _.find(this.groups, { id: $stateParams.groupName });
    }
    else {
      this.selectedGroup = _.first(this.groups);
    }
  }

  initChannels($stateParams) {
    this.channels = extractElements(data[this.selectedGroup.id].channels);
    this.selectedChannel = _.find(this.channels, (channel) => {
      return channel.id === $stateParams.channelName;
    });
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
    if (!this.selectedGroup) return false;
    return _.includes(data[this.selectedGroup.id].administrators, this.user.login);
  }
}

const name = 'sidebar';

module.component(name, {
  template,
  controller: Sidebar
});
