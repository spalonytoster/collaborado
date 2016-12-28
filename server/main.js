// jshint node: true, esversion: 6
import { Meteor } from 'meteor/meteor';

// collections
import { Groups } from '../imports/api/groups';
import { UserSettings } from '../imports/api/user-settings';
import { Posts } from '../imports/api/posts';

// data
import groups from './data/groups.json';
import userSettings from './data/user-settings.json';
import posts from './data/posts.json';

function seedCollection(collection, data) {
  collection.remove({});
  _.each(data, (element) => {
    collection.insert(element);
  });
}

Meteor.startup(() => {
  // initial data
  seedCollection(Groups, groups);
  seedCollection(UserSettings, userSettings);
  seedCollection(Posts, posts);
});
