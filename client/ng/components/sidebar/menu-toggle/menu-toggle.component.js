// jshint esversion: 6
import module from './menu-toggle.module';
import template from './menu-toggle.html';
import panelTemplate from './create-element-panel/create-element-panel.html';
import CreateElementPanel from './create-element-panel/create-element-panel.ctrl';
import _ from 'lodash';

// TODO: utworzylem create-element-panel, ale chyba trzeba zrobic
// 2 osobne konrolery i htmle
// w zasadzie to mozna przeciez zrobic od tego komponent
// do mdPanel przekazac template `<create-element-panel></create-element-panel>`
// w dalszym ciagu trzeba jakos rozwiazac to, ze musi byc osobny template
// oraz kontroler dla dialogu create group oraz create channel

class MenuToggle {
  constructor($element, $animateCss, $timeout, $mdPanel) {
    'ngInject';

    this.$onInit = () => {
      this.id = _.kebabCase(this.name);
      this.toggled = true;
      this._mdPanel = $mdPanel;
    };

    // standard way of implementing animation would create a delay on collapsing the list
    this.animateListToggle = () => {
      let getTargetHeight = (elem) => {
        var _targetHeight;

        elem.addClass('no-transition');
        elem.css('height', '');

        _targetHeight = elem.prop('clientHeight');

        elem.css('height', 0);
        elem.removeClass('no-transition');

        return _targetHeight;
      };
      let _el_ul = $element.find(`ul#docs-menu-${this.id}`);
      $animateCss(_el_ul, {
        from: {
          height: this.toggled ? 0 : (getTargetHeight(_el_ul) + 'px')
        },
        to: {
          height: this.toggled ? (getTargetHeight(_el_ul) + 'px') : 0
        },
        duration: 0.3
      }).start();
    };
  }

  toggle() {
    this.toggled = !this.toggled;
    this.animateListToggle();
  }

  isSelected(link) {
    if (!this.selected) return false;
    return link.id === this.selected.id;
  }

  select(event) {
    this.onSelected({
      $event: {
        selected: event.selected
      }
    });
  }

  checkCreationPermission() {
    return this.creationEnabled;
  }

  showPanel() {
    let position = this._mdPanel.newPanelPosition()
      .absolute()
      .center();

    let config = {
      attachTo: angular.element(document.body),
      controller: CreateElementPanel,
      controllerAs: '$ctrl',
      disableParentScroll: true,
      template: panelTemplate,
      hasBackdrop: true,
      panelClass: 'create-element-panel',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: false,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  }
}

const name = 'menuToggle';

module.component(name, {
  bindings: {
    name: '@',
    children: '<',
    selected: '<',
    onSelected: '&',
    creationEnabled: '<'
  },
  template,
  controller: MenuToggle
});
