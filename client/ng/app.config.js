// jshint esversion: 6
import app from './app.module';

function config($mdIconProvider, $mdThemingProvider,
                $locationProvider, $urlRouterProvider) {
  'ngInject';

  $mdThemingProvider.theme('default')
     .primaryPalette('blue')
     .accentPalette('red');

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/dashboard');
}

app.config(config);
