// jshint esversion: 6

import module from './menu-toggle.module';
import template from './menu-toggle.html';
import _ from 'lodash';

class MenuToggle {
  constructor($element, $animateCss, $timeout) {
    'ngInject';

    this.$onInit = () => {
      this.id = _.kebabCase(this.name);
      this.toggled = true;
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
    // console.log('selected: ' + JSON.stringify(this.selected));
    // console.log('link: ' + JSON.stringify(link));
    // console.log(link.id === this.selected.id);
    // console.log();
    return link.id === this.selected.id;
  }

  select(event) {
    this.onSelected({
      $event: {
        selected: event.selected
      }
    });
  }
}

const name = 'menuToggle';

module.component(name, {
  bindings: {
    name: '@',
    children: '<',
    selected: '<',
    onSelected: '&'
  },
  template,
  controller: MenuToggle
});
