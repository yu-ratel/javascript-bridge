const { Console } =require('@woowacourse/mission-utils');
const OutputView = {

  printMessage(message) {
    return Console.print(message);
  },

  printMap(map) {
    return Console.print(map);
  },

  printResult() {},


};

module.exports = OutputView;
