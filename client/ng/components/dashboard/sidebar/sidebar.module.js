// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import { name as MenuHeader } from './menu-header/menu-header.module';
import { name as MenuLink } from './menu-link/menu-link.module';
import { name as MenuToggle } from './menu-toggle/menu-toggle.module';

const name = 'sidebar';

export default angular.module(name, [
  angularMeteor,
  angularAria,
  angularMaterial,
  uiRouter,
  MenuHeader,
  MenuLink,
  MenuToggle
]);
