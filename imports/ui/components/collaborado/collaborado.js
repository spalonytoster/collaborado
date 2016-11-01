// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularMaterial from 'angular-material';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';

import template from './collaborado.html';

class Collaborado { }

const name = 'collaborado';

// create a module
export default angular.module(name, [
  angularMeteor,
  angularMaterial,
  angularAria,
  angularAnimate
]).component(name, {
  template,
  controllerAs: name,
  controller: Collaborado
});
