class BridgeValidtion {

static validateBridge(bridge) {
  if(bridge.length < 3 || bridge.length > 20) {
    throw new Error('[ERROR] 3에서 20까지의 숫자만 입력하셔야 합니다.')
  }
  if(Number.isNaN(Number(bridge))) {
    throw new Error('[ERROR] 숫자만 입력하셔야 합니다.')
  }
}
}

module.exports = BridgeValidtion;