const BridgeGame = require('../Model/BridgeGame');
const OutputView = require('../View/OutputView');


class BridgeApi { 
  #Game

  constructor () {
    this.#Game = new BridgeGame();
  }

  bridgeSize(size) {
    return this.#Game.brige(size);
  }

  nowMapState(select) {
    return OutputView.printMap(this.#Game.move(select));
  }

  gameState() {
    if(this.gamechlear()) {
      return OutputView.printResult(this.#Game.user.userStatus, this.#Game.answerOption());
    }
    return this.#Game.progress;
  }

  gameRetry(select) {
    return this.#Game.retry(select)
  }

  gamechlear() {
    return this.#Game.answer();
  }

  gameResult() {
    return OutputView.printResult(this.#Game.user.userStatus, this.#Game.answerOption());
  }

}

module.exports = BridgeApi;
