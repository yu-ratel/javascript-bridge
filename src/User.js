class User {

  constructor() {
    this.userStatus = [[],[]];
    this.userCount = 0;
  }

  whetherHasCan(input, bridge) {
    if(input === bridge[this.userCount]) {
      return true;
    }
    if(input !== bridge[this.userCount]) {
      return false;
    }
  }

  canGo(input) {
    if(input === 'U') {
      this.userStatus[bridgeForm.UP].push(bridgeForm.hit);
      this.userStatus[bridgeForm.DOWN].push(bridgeForm.block);
    }
      if(input === 'D') {
      this.userStatus[bridgeForm.UP].push(bridgeForm.block);
      this.userStatus[bridgeForm.DOWN].push(bridgeForm.hit);
    }
  }

  willGo(input) {
    this.userCount+= 1;
    this.canGo(input);
    return this.userStatus;
  }

  canNotGo(input) {
    if(input === 'U') {
      this.userStatus[bridgeForm.UP].push(bridgeForm.miss);
      this.userStatus[bridgeForm.DOWN].push(bridgeForm.block);
    }
    if(input === 'D') {
      this.userStatus[bridgeForm.UP].push(bridgeForm.block);
      this.userStatus[bridgeForm.DOWN].push(bridgeForm.miss);
    }
  }

  willNotGo(input) {
    this.canNotGo(input);
    return this.userStatus;
  }
}


module.exports = User;

const bridgeForm = {
    hit: ' O ',
    miss: ' X ',
    block: '   ',
    UP: 0,
    DOWN: 1,
  }