// jshint esversion: 6
import module from './sidebar.module';

function config($mdThemingProvider, $mdIconProvider) {
  'ngInject';

  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue', {
      default: '700'
    });

  // ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);

}

module.config(config);
