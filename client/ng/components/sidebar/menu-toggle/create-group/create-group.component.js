// jshint esversion: 6
import _ from 'lodash';
import groupTypes from './group-types.json';

import template from './create-panel.html';
import module from './create-group.module';

class CreateGroup {
  constructor() {
    'ngInject';

    this.$onInit = () => {
      this.group = {};
      this.placeholder = {
        name: "Meteor User Group",
        get id() {
          return _.kebabCase(this.name);
        }
      };
      this.groupTypes = _.values(groupTypes);
    };
  }

  submit(valid) {
    if (!valid) return;
  }

  cancel() {
    let panelRef = this.panelRef;
    if (!panelRef) return;
    panelRef.close().then(() => {
      panelRef.destroy();
    });
  }

  get id() {
    return _.kebabCase(this.group.name);
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
