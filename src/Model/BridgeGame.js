const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeValidtion = require('../Validtion');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #count
  
  constructor() {
    this.userStatus = [[],[]];
    this.#bridge 
    this.#count = 0;
    this.ch = true;
    this.totolCount = 1;
  }

  bridgeLengthInput(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  move(input) {
    if(this.whetherHasCan(input, this.#bridge, this.#count)) {
      return this.hit(input, this.userStatus);
    }
    if(!this.whetherHasCan(input, this.#bridge, this.#count)) {
      return this.miss(input, this.userStatus);
    }
  }

  whetherHasCan(input, bridge, count) {
    if(input !== bridge[count]) {
      return false;
    }
    if(input === bridge[count]) {
      return true;
    }
  }

  hit(input, status) {
    if(input === 'U') {
      status[bridgeForm.UP].push(bridgeForm.hit);
      status[bridgeForm.DOWN].push(bridgeForm.block);
    }
    if(input === 'D') {
      status[bridgeForm.UP].push(bridgeForm.block);
      status[bridgeForm.DOWN].push(bridgeForm.hit);
    }
    this.#count += 1;
  }

  miss(input, status) {
    if(input === 'U') {
      status[bridgeForm.UP].push(bridgeForm.miss);
      status[bridgeForm.DOWN].push(bridgeForm.block);
    }
    if(input === 'D') {
      status[bridgeForm.UP].push(bridgeForm.block);
      status[bridgeForm.DOWN].push(bridgeForm.miss);
    }
    this.ch = false;
  }

  answer() {
    if(this.#count === this.#bridge.length) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;


const bridgeForm = {
  hit: ' O ',
  miss: ' X ',
  block: '   ',
  UP: 0,
  DOWN: 1,
}
