// jshint node: true, esversion: 6
'use strict';

import { Meteor } from 'meteor/meteor';
import { Groups } from '../imports/collections/groups';
import _ from 'lodash';
import groups from './data.json';

Meteor.startup(() => {
  Groups.remove({});
  _.each(groups, (group) => {
    Groups.insert(group);
  });
  Groups.find({}).fetch().forEach((group) => {
    console.log(group);
  });
});
