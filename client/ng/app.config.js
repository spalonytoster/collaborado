// jshint esversion: 6
import app from './app.module';

function config($mdIconProvider, $mdThemingProvider,
                $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue', {
      default: '700'
    });
    // .accentPalette('blue', {
    //   'default': '200' // use shade 200 for default, and keep all other shades the same
    // });

  $mdThemingProvider
    .theme('dark')
    .primaryPalette('grey',{
      'default': '900'})
       .accentPalette('grey',{
      'default': '700'})
       // .backgroundPalette('grey',{'default': '900'})
    .dark();

  // $mdThemingProvider.setDefaultTheme('default');
  $mdThemingProvider.alwaysWatchTheme(true);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);


  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

app.config(config);
