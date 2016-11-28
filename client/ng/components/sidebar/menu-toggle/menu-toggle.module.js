// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';

import { name as MenuLink } from './../menu-link/menu-link.module';

const name = 'menuToggle';

export default angular.module(name, [
  angularMeteor,
  angularAnimate,
  angularAria,
  angularMaterial,
  MenuLink
]);
