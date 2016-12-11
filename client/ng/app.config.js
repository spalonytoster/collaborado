// jshint esversion: 6
import app from './app.module';

function config($mdIconProvider, $mdThemingProvider,
                $locationProvider, $urlRouterProvider) {
  'ngInject';

  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue', {
      default: '700'
    });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

}

app.config(config);
