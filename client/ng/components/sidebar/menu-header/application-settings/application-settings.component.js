// jshint esversion: 6
import template from './application-settings.html';
import module from './application-settings.module';
import { UserSettings } from '/imports/api/user-settings';
import { Themes } from '/imports/api/themes';

class ApplicationSettings {
  constructor($mdDialog) {
    'ngInject';
    this._mdDialog = $mdDialog;
  }
  
  close() {
    this._mdDialog.cancel();
  }
}

const name = 'applicationSettings';

export default module.component(name, {
  template,
  controller: ApplicationSettings,
  bindings: {
    panelRef: "<"
  }
});
