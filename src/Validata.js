const Validata = {
  isBridgeSize(input) {
    if(input < 3 && input > 20) {
      throw '[ERROR] 3 이상 20 이하의 숫자를 입력하셔야 합니다.'
    }
  },

  isMoving(input) {
    if(input !== 'U' && input !== 'D') {
      throw '[ERROR] U 와 D 중 하나의 문자만 입력하셔야 합니다.'
    }
  },
}