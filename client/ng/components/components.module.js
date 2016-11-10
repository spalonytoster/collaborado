// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Dashboard } from './dashboard/dashboard.module';
import { name as Sidebar } from './sidebar/sidebar.module';

const name = 'components';

export default angular.module(name, [
  angularMeteor,
  Dashboard,
  Sidebar
]);
