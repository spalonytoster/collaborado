// jshint esversion: 6
import _ from 'lodash';
import module from './sidebar.module';
import template from './sidebar.html';
import { Groups } from '/imports/collections/groups';

class Sidebar {
  constructor($scope, $reactive, $state, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      groups() {
        return Groups.find({});
      }
    });

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
          groupId: this.selectedGroup.id,
          channelId: this.selectedChannel.id
        });
      }
      else if (this.selectedGroup) {
        $state.go('group', {
          groupId: this.selectedGroup.id
        });
      }
    };
  }

  initGroups($stateParams) {
    if (this.groups.length === 0) return;

    if ($stateParams.groupId) {
      this.selectedGroup = _.find(this.groups, { id: $stateParams.groupId });
    }
    else {
      this.selectedGroup = _.first(this.groups);
    }
  }

  initChannels($stateParams) {
    if (!this.selectedGroup) return;
    this.channels = _.find(this.groups, { id: this.selectedGroup.id })
                      .channels;

    let selectedChannel = _.find(this.channels, { id: $stateParams.channelId });
    this.selectedChannel = selectedChannel;
  }

  selectGroup(event) {
    this.selectedGroup = event.selected;
    this.channels = _.find(this.groups, { id: this.selectedGroup.id });
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
    let selectedGroup = _.find(this.groups, { id: this.selectedGroup.id });
    return _.includes(selectedGroup.administrators, this.user.login);
  }
}

const name = 'sidebar';

module.component(name, {
  template,
  controller: Sidebar
});
