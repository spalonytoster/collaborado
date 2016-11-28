// jshint esversion: 6

import module from './sidebar.module';
import template from './sidebar.html';
import data from './data.json';

function refreshGroups(data) {

}

function refreshChannels(group) {

}

function groupsToSections(data) {
  let groups = [],
    channels = [];

  data.groups.forEach((group) => {
    groups.push({
      id: group.name,
      name: group.displayName
    });

    group.channels.forEach((channel) => {
      channels.push({
        id: channel.name,
        name: channel.displayName,
        stateful: true,
        state: 'channelState'
      });
    });
  });

  let sections = [{
    id: 'groups',
    name: 'Groups',
    type: 'toggle',
    pages: groups
  }, {
    id: 'channels',
    name: 'Channels',
    type: 'toggle',
    pages: channels
  }];

  return sections;
}

class Sidebar {
  constructor($scope, $timeout) {
    'ngInject';

    // ssSideNav.sections = groupsToSections(data);
    // ssSideNav.toggleSelectSection(ssSideNav.sections[0]);
    // ssSideNav.toggleSelectSection(ssSideNav.sections[1]);

    // this.sidebar = ssSideNav;
  }
}

const name = 'sidebar';

module.component(name, {
  template,
  controller: Sidebar
});
