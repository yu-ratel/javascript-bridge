const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const User = require('../User');

class BridgeGame {
  #bridge
  #totolCount
  
  constructor() {
    this.user = new User();
    this.#bridge; 
    this.progress = true;
    this.#totolCount = 1;
  }

  brige(size) {
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

  retry(select) {
    if(select === 'R') {
      this.retryOption();
      this.progress = true;
      return true;
    } 
    if(select === 'Q') {
      return false;
    }
  }

  retryOption() {
    this.progress = false;
    this.#totolCount += 1 ;
    return this.user.returnPosition();
  }

  answer() {
    if(this.user.userCount === this.#bridge.length) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;