const Validata = {
  isBridgeSize(input) {
    if(input < 3 && input > 20) {
      throw '[ERROR] 3 이상 20 이하의 숫자를 입력하셔야 합니다.'
    }
  }
}