const { Console } = require("@woowacourse/mission-utils");
const OutputView = {

  start() {
    Console.print('다리 건너기 게임을 시작합니다.') ;
  },
  
  printMap(select) {
    let userStatus = select;
    Console.print(`[${userStatus[0].join('|')}]`);
    Console.print(`[${userStatus[1].join('|')}]`);
  },
  
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