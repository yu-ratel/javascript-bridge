const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeValidtion = require('../Validtion');
const User = require('../User');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #totolCount
  
  constructor() {
    this.user = new User();
    this.#bridge 
    this.progress = true;
    this.#totolCount = 1;
  }

  bridgeLengthInput(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  move(input) {
    if(!this.user.whetherHasCan(input, this.#bridge)) {
      return this.user.willGo(input);
    }
    if(this.user.whetherHasCan(input, this.#bridge)) {
      this.progress = false;
      return this.user.willNotGo(input);
    }
  }

  retry() {
    if(this.answer()) {
      this.userStatus[0].pop()
      this.userStatus[1].pop()
      this.ch = true;
      this.#totolCount += 1 ;
    }
  }

  answer() {
    if(this.user.userCount === this.#bridge.length) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;