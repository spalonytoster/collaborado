// jshint esversion: 6

class CreateElementPanel {
  constructor(mdPanelRef) {
    this._mdPanelRef = mdPanelRef;
  }

  closeDialog() {
    let panelRef = this._mdPanelRef;
    if (!panelRef) return;
    panelRef.close().then(() => {
      panelRef.destroy();
    });
  }
}

export default CreateElementPanel;
