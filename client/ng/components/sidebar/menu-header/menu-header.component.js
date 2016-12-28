// jshint esversion: 6
import module from './menu-header.module';
import template from './menu-header.html';

class MenuHeader {
  constructor($mdPanel) {
    this._mdPanel = $mdPanel;
  }

  openSettings() {
    let targetComponent = 'application-settings';

    let position = this._mdPanel.newPanelPosition()
      .absolute()
      .center();

    let config = {
      attachTo: angular.element(document.body),
      disableParentScroll: true,
      controller: function(mdPanelRef) {
        this.panelRef = mdPanelRef;
      },
      controllerAs: '$ctrl',
      template: `
        <${targetComponent} panel-ref="$ctrl.panelRef"></${targetComponent}>
      `,
      hasBackdrop: true,
      panelClass: `${targetComponent}-panel`,
      position: position,
      trapFocus: true,
      clickOutsideToClose: false,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
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
