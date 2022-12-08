const OutputView = require('./View/OutputView');

const tryCatchKit = (execution, retry) => {
  try {
    execution();
  } catch({ message }) {
    OutputView.printMessage(message);
    retry();
  }
}

module.exports = tryCatchKit;