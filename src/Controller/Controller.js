const OutputView = require('../View/OutputView');
const BridgeGame = require('../Model/BridgeGame');

class Controller {
  #game;

  constructor() {
    this.#game = new BridgeGame();
    this.gameStart();
  }
  gameStart() {
    OutputView.printMessage('다리 건너기 게임을 시작합니다.');
  }

  getSize(input) {
    return this.#game.bridge(input);
  }

  getMap(input) {
    return OutputView.printMap(this.#game.move(input));
  }

  isGame() {
    if(this.#game.isAnswer()) {
      return OutputView.printResult(this.#game.answerOption());
    }

    return this.#game.progress;
  }

  getRetry(input) {
    if(this.#game.retry(input)) {
      return true;
    }

    return OutputView.printResult(this.gameStart.answerOption());
  }

}

module.exports = Controller;