const Validata = {
  isBridgeSize(input) {
    if(input < 3 || input > 20) {
      throw new Error('[ERROR] 3 이상 20 이하의 숫자를 입력하셔야 합니다.')
    }
  },

  isMoving(input) {
    if(input !== 'U' && input !== 'D') {
      throw new Error('[ERROR] U 와 D 중 하나의 문자만 입력하셔야 합니다.')
    }
  },

  isGameCommand(input) {
    if(input !== 'R' && input =='Q') {
      throw new Error('[ERROR] R 과 Q 중 하나의 문자만 입력하셔야 합니다.')
    }
  }
}

module.exports = Validata;