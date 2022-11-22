const { Console } = require("@woowacourse/mission-utils");
const Validtion = require('../Validtion');
const BridgeApi = require('../Controller/BridgeApi');

const api = new BridgeApi();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {

  bridgeSizeControl() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      try {
        Validtion.validateBridge(size)
      } catch(error) {
        Console.print(error);
        return this.bridgeSizeControl();
      }
      this.readBridgeSize(size);
    });
  },
  readBridgeSize(size) {
      api.bridgeSize(size);
      this.movingControl();
  },

  movingControl() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (select) => {
      try {
        Validtion.validateSelect(select);
      } catch(error) {
        Console.print(error);
        return this.movingControl();
      }
      this.readMoving(select);
    });
  },
  readMoving(select) {
      api.nowMapState(select);
      if(api.gameState()) {
        return this.movingControl();
      }
      if(!api.gamechlear()) {
      this.GameCommandControl();
      }
  },

  GameCommandControl() {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (select) => {
      try {
        Validtion.validateResult(select);
      } catch(error) {
        Console.print(error);
        return this.GameCommandControl();
      }
      this.readGameCommand(select);
    });
  },
  readGameCommand(select) {
    if(api.gameRetry(select)) {
       return this.readMoving();
    };
    api.gameResult();
  },

}

module.exports = InputView;