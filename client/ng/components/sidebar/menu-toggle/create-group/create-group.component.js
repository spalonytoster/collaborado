// jshint esversion: 6
import kebabCase from 'lodash/kebabCase';
import template from './create-group.html';
import module from './create-group.module';
import groupTypes from './group-types.json';
import { Groups } from '/imports/api/groups';
import Group from '/imports/models/group';

class CreateGroup {
  constructor() {
    'ngInject';

    this.$onInit = () => {
      this.group = {
        get id() {
          return kebabCase(this.name);
        }
      };
      this.placeholder = {
        name: "Meteor User Group",
        get id() {
          return kebabCase(this.name);
        },
        description: "What is your group about?"
      };
      this.groupTypes = _.values(groupTypes);
    };
  }

  submit(valid) {
    if (!valid) return;
    let group = {
      id: this.group.id,
      name: this.group.name,
      type: {
        icon: this.group.type.icon,
        name: this.group.type.name
      },
      administrators: ['spalonytoster'],
      description: this.group.description,
      channels: [],
      moderators: []
    };

    console.log(group);
    Groups.insert(group);
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

const name = 'createGroup';

export default module.component(name, {
  template,
  controller: CreateGroup,
  bindings: {
    panelRef: "<"
  }
});
