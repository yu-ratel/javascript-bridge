const { Console } = require("@woowacourse/mission-utils");
const OutputView = {

  start() {
    Console.print('다리 건너기 게임을 시작합니다.\n') ;
  },
  
  printMap(select) {
    let userStatus = select;
    Console.print(`[${userStatus[0].join('|')}]\n[${userStatus[1].join('|')}]`);
  },

   printResult(user, option) {
    Console.print(`최종 게임 결과`)
    Console.print(`[${user[0].join('|')}]`);
    Console.print(`[${user[1].join('|')}]\n`);
    Console.print(`게임 성공 여부: ${option[0]}`);
    Console.print(`총 시도한 횟수: ${option[1]}`);
    return Console.close()
   },
};

module.exports = OutputView;