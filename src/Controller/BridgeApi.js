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

  missMapState(select) {
    this.#Game.retry();
    return OutputView.printMap(this.#Game.move(select));
  }

  gameState() {
    return this.#Game.progress;
  }

  gameRetry(select) {
    return this.#Game.retry(select)
  }

}

module.exports = BridgeApi;
