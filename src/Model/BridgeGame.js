const Map = require('./Map');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge 
  #totalCount;

  constructor() {
    this.#bridge; 
    this.map = new Map();
    this.progress = true;
    this.#totalCount = 1;
  }

  bridge(size) {
    return this.#bridge = makeBridge(size, generate);
  } 

  move(input) {
    if(!this.map.isMoving(input, this.#bridge)) {
      this.progress = false;
      return this.map.setMap();
    }

    return this.map.setMap();
  }

  isAnswer() {
    if(this.map.mapCount === this.#bridge.length) {
      return true;
    }
  }

  retry(input) {
    if(input === 'R') {
      this.map.reset()
      this.#totalCount += 1; 
      this.progress = true;
      return true;
    }

    return false;
  }
}

module.exports = BridgeGame;
