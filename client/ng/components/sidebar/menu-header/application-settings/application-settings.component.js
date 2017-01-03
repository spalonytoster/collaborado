// jshint esversion: 6
import template from './application-settings.html';
import module from './application-settings.module';
import { UserSettings } from '/imports/api/user-settings';
import { Themes } from '/imports/api/themes';

class ApplicationSettings {
  close() {
    let panelRef = this.panelRef;
    if (!panelRef) return;
    panelRef.close().then(() => {
      panelRef.destroy();
    });
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
