// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Components } from './components/components.module';

const name = 'app';

export default angular.module(name, [
  angularMeteor,
  Components
]);
