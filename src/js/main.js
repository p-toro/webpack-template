import '../scss/style.scss';
import prependText from './modules/prependText.js';
import setText from './modules/setText.js';

class ShowMessage {
  constructor(message) {
    this.message1 = message;
    this.createMessage();
  }
  createMessage() {
    const message2 = setText('working!');
    prependText(this.message1 + ' is ' + message2);
  }
}

const showMessageInstance = new ShowMessage('jQuery');
