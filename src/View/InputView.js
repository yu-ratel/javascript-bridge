const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require('../Model/BridgeGame');
const OutputView = require('./OutputView');
const Validtion = require('../Validtion');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      OutputView.length(size);
      this.readMoving();
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (select) => {
      OutputView.printMap(select);
      if(OutputView.true()) {
        return this.readMoving();
      }
      if(!OutputView.real()) {
        return OutputView.printResult();
      }
      this.readGameCommand();
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
    , (select) => {
      if(select === 'R') {
        OutputView.chking();
        if(OutputView.real()) {
        this.readMoving();
        }
      }
      if(select === 'Q') OutputView.printResult()
    })
  }
};

module.exports = InputView;
InputView.readBridgeSize()