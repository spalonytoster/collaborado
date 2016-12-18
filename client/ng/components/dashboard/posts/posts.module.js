// jshint esversion: 6

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularMaterial from 'angular-material';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import ngFileModel from 'ng-file-model';

const name = 'posts';

export default angular.module(name, [
  angularMeteor,
  angularMaterial,
  angularAria,
  angularAnimate
]);
