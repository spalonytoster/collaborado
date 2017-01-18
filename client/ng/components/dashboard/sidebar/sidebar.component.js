// jshint esversion: 6
import module from './sidebar.module';
import template from './sidebar.html';
import { Groups } from '/imports/api/groups';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

class Sidebar {
  constructor($scope, $reactive, $state, $stateParams, $timeout) {
    'ngInject';

    Tracker.autorun(() => {
      this.groups = Groups.find({administrators: Meteor.userId()}).fetch();
      this.initGroups($stateParams);
      this.initChannels($stateParams);

      // this is the only way I found to activate digest after changes within autorun
      $timeout();
    });

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
      this.selectedGroup = _.find(this.groups, (group) => group.id === $stateParams.groupId);
      this.onGroupChange({
        $event: {
          groupId: this.selectedGroup.id
        }
      });
    }
    else {
      this.selectedGroup = _.first(this.groups);
    }
  }

  initChannels($stateParams) {
    if (!this.selectedGroup) return;
    this.channels = _.find(this.groups, (group) => group.id === this.selectedGroup.id)
                      .channels;

    let selectedChannel = _.find(this.channels, (channel) => channel.id === $stateParams.channelId);
    this.selectedChannel = selectedChannel;
    if (_.isObject(this.selectedChannel)) {
      this.onChannelChange({
        $event: {
          channelId: this.selectedChannel.id
        }
      });
    }
  }

  selectGroup(event) {
    this.selectedGroup = event.selected;
    delete this.selectedChannel;
    this.channels = _.find(this.groups, (group) => group.id === this.selectedGroup.id);

    this.onGroupChange({
      $event: {
        groupId: this.selectedGroup.id
      }
    });

    // setting timeout for animation to finish
    setTimeout(() => {
      this.handleRedirect();
    }, 500);
  }

  selectChannel(event) {
    this.selectedChannel = event.selected;
    this.onChannelChange({
      $event: {
        channelId: this.selectedChannel.id
      }
    });

    // setting timeout for animation to finish
    setTimeout(() => {
      this.handleRedirect();
    }, 500);
  }

  checkUserChannelCreationPermission() {
    if (!this.selectedGroup) return false;
    let selectedGroup = _.find(this.groups, (group) => group.id === this.selectedGroup.id);
    return _.contains(selectedGroup.administrators, Meteor.userId());
  }
}

const name = 'sidebar';

module.component(name, {
  template,
  controller: Sidebar,
  bindings: {
    onGroupChange: '&',
    onChannelChange: '&'
  }
});
