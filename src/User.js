class User {

  constructor() {
    this.userStatus = [[],[]];
    this.userCount = 0;
  }

  whetherHasCan(input, bridge) {
    if(input === bridge[this.userCount]) {
      this.canGo(input, this.userStatus);
      return true;
    }
    if(input !== bridge[this.userCount]) {
      this.canNotGo(input, this.userStatus);
      return false;
    }
  }

  canGo(input, status) {
    if(input === 'U') {
      status[bridgeForm.UP].push(bridgeForm.hit);
      status[bridgeForm.DOWN].push(bridgeForm.block);
    }
      if(input === 'D') {
      status[bridgeForm.UP].push(bridgeForm.block);
      status[bridgeForm.DOWN].push(bridgeForm.hit);
    }
  }

  willGo() {
    this.userCount+= 1;
    return this.userStatus;
  }

  canNotGo(input, status) {
    if(input === 'U') {
      status[bridgeForm.UP].push(bridgeForm.miss);
      status[bridgeForm.DOWN].push(bridgeForm.block);
    }
    if(input === 'D') {
      status[bridgeForm.UP].push(bridgeForm.block);
      status[bridgeForm.DOWN].push(bridgeForm.miss);
    }
  }

  willNotGo(progress) {
    progress = false;
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