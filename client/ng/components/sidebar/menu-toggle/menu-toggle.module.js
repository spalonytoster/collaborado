// jshint esversion: 6
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';

import { name as MenuLink } from './../menu-link/menu-link.module';
import { name as CreateGroup } from './create-group/create-group.module';
import { name as CreateChannel } from './create-channel/create-channel.module';

const name = 'menuToggle';

export default angular.module(name, [
  angularMeteor,
  angularAria,
  angularMaterial,
  MenuLink,
  CreateGroup,
  CreateChannel
]);
