// jshint esversion: 6
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import ngFileModel from 'ng-file-model';

const name = 'applicationSettings';

export default angular.module(name, [
  angularMeteor,
  angularAria,
  angularMaterial,
  'ng-file-model'
]);
