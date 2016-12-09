// jshint node: true, esversion: 6
'use strict';

import { Meteor } from 'meteor/meteor';
import { Groups } from '../imports/api/groups';
import _ from 'lodash';
import groups from './data.json';

Meteor.startup(() => {
  Groups.remove();
  _.each(groups, (group, id) => {
    group.id = id;
    Groups.insert(group);
  });
  Groups.find({}).fetch().forEach((group) => {
    console.log(group);
  });
});
