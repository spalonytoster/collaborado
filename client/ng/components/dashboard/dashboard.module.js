// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularMaterial from 'angular-material';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';

const name = 'dashboard';

export default angular.module(name, [
  angularMeteor,
  angularMaterial,
  angularAria,
  angularAnimate,
  uiRouter
]);
