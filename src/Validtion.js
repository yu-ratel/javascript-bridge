class BridgeValidtion {

  static validateBridge(bridge) {
    if(Number(bridge) < 3 || Number(bridge) > 20) {
      throw new Error('[ERROR] 3에서 20까지의 숫자만 입력하셔야 합니다.')
    }
    if(Number.isNaN(Number(bridge))) {
      throw new Error('[ERROR] 숫자만 입력하셔야 합니다.')
    }
  }
  static validateSelect(select) {
    if(select.length !== 1 ) {
      throw new Error('[ERROR] 한자리의 U와 D를 입력하셔야 합니다.')
    }
    if(select !== 'U' && select !== 'D') {
      throw new Error('[ERROR] U와 D로만 입력하셔야 합니다.')
    }
  }
}

module.exports = BridgeValidtion;