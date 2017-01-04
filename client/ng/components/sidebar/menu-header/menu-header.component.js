// jshint esversion: 6
import module from './menu-header.module';
import template from './menu-header.html';

class MenuHeader {
  constructor($mdDialog) {
    'ngInject';
    this._mdDialog = $mdDialog;
  }

  openSettings(event) {

    let config = {
      parent: angular.element(document.body),
      targetEvent: event,
      template: `
        <application-settings></application-settings>
      `,
      hasBackdrop: true,
      // position: position,
      trapFocus: true,
      clickOutsideToClose: false,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdDialog.show(config);
  }
}

const name = 'menuHeader';

module.component(name, {
  controller: MenuHeader,
  bindings: {
    user: "<"
  },
  template
});
