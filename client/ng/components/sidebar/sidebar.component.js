// jshint esversion: 6

import module from './sidebar.module';
import template from './sidebar.html';

class Sidebar {
  constructor($scope, ssSideNav, $timeout) {
    'ngInject';

    ssSideNav.sections = [{
      id: 'toogle_3',
      name: 'Section Heading 3',
      type: 'heading',
      children: [{
        name: 'Toogle 3',
        type: 'toggle',
        pages: [{
          id: 'toogle_3_link_1',
          name: 'item 1',
          state: 'common.toggle3.item1'
        }, {
          id: 'toogle_3_link_2',
          name: 'item 2',
          state: 'common.toggle3.item2'
        }]
      }]
    }];

    $timeout(() => {
      ssSideNav.forceSelectionWithId('toogle_3_link_1');
    }, 10);

    $scope.sidebar = ssSideNav;

    $scope.onClickMenu = function() {
      $mdSidenav('left').toggle();
    };
  }
}

const name = 'sidebar';

module.component(name, {
  template,
  controller: Sidebar
});
