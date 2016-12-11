// jshint node: true, esversion: 6
import { Meteor } from 'meteor/meteor';
import { Groups } from '../imports/api/groups';
import groups from './data.json';

Meteor.startup(() => {

  // initial data
  Groups.remove({});
  _.each(groups, (group) => {
    Groups.insert(group);
  });

});
