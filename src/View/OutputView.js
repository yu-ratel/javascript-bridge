const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require('../Model/BridgeGame');

const game = new BridgeGame();
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  start() {
    Console.print('다리 건너기 게임을 시작합니다.') ;
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  length(size) {
    game.bridgeLengthInput(size);
  },
  
  printMap(input) {
    if(!game.answer()) {
    game.move(input);
    Console.print(`[${game.userStatus[0].join('|')}]`);
    Console.print(`[${game.userStatus[1].join('|')}]`);
    }
    if(game.answer()) {
      game.ch = false;
    }
  },

  true() {
    return game.ch
  },

  chking() {
    if(!game.answer()) {
    game.userStatus[0].pop()
    game.userStatus[1].pop()
    game.ch = true;
    game.totolCount += 1 ;
    }
  },

  real() {
    if(game.answer()) {
      return false;
    }

    return true;
  },

  totalGameText() {
    if(game.answer()) {
      return '\n최종 게임 결과';
    }

    return '최종 게임 결과';
  },

  answerText() {
    if(game.answer()) {
      return '성공';
    }

    return '실패';
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printResult() {
    Console.print(`${this.totalGameText()}`)
    Console.print(`[${game.userStatus[0].join('|')}]`);
    Console.print(`[${game.userStatus[1].join('|')}]\n`);
    Console.print(`게임 성공 여부: ${this.answerText()}`);
    Console.print(`총 시도한 횟수: ${game.totolCount}`);
    Console.close();
   },
};

module.exports = OutputView;