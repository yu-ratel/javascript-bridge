const { Console } =require('@woowacourse/mission-utils');
const OutputView = {

  printMessage(message) {
    return Console.print(message);
  },

  printMap(map) {
    return Console.print(map);
  },

  printResult(option) {
    Console.print('최종 게임 결과');
    Console.print(option[0]);
    Console.print(`게임 성공 여부: ${option[1]}`);
    Console.print(`총 시도한 횟수: ${option[2]}`);
  },


};

module.exports = OutputView;
