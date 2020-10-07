class Start {
  constructor() {
    this.input = createInput('Type your name here');
    this.button = createButton('PLAY');
    this.info = createElement('h2');
  }

  playerName() {
    if (this.button.mousePressed()) {
      var ref = database.ref('Profile').set({
        Name: this.input.value(),
      });
    }
  }
  display() {
    this.info.html('Testing Prototype');
    this.button.position(displayWidth / 2 + 30, displayHeight / 2);

    this.button.mousePressed(() => {
      this.info.hide();
      this.input.hide();
      this.playerName();
    });
  }
}
