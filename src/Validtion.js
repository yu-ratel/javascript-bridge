class BridgeValidtion {

  static validateBridge(bridge) {
    if(Number(bridge) < 3 || Number(bridge) > 20) {
      throw ('[ERROR] 3에서 20까지의 숫자만 입력하셔야 합니다.')
    }
    if(Number.isNaN(Number(bridge))) {
      throw ('[ERROR] 숫자만 입력하셔야 합니다.')
    }
  }
  static validateSelect(select) {
    if(select.length !== 1 ) {
      throw ('[ERROR] 한자리의 U와 D를 입력하셔야 합니다.')
    }
    if(select !== 'U' && select !== 'D') {
      throw ('[ERROR] U와 D로만 입력하셔야 합니다.')
    }
  }

  static validateResult(select) {
    if(select !== 'R' && select !== 'Q') {
      trow ('[ERROR] 재시작(R) 과 종료(Q) 로만 입력하셔야 합니다.')
    }
  }
}

module.exports = BridgeValidtion;