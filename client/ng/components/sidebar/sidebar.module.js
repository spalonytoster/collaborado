// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import ngMaterialSidenav from 'angular-material-sidenav';
import uiRouter from 'angular-ui-router';

const name = 'sidebar';

export default angular.module(name, [
  angularMeteor,
  angularAnimate,
  angularAria,
  angularMaterial,
  'sasrio.angular-material-sidenav',
  uiRouter
]);
