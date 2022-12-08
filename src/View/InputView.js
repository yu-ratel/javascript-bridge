const { Console } = require('@woowacourse/mission-utils');
const tryCatchKit = require('../tryCatchKit');
const Validata = require('../Validata');
const Controller = require('../Controller/Controller');

const InputView = {
  controller: new Controller(),

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n' , (input) => {
      tryCatchKit(
        () => Validata.isBridgeSize(input),
        () => this.readBridgeSize()
      )

      this.controller.getSize(input);
      this.readMoving()
    });
  },

  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래:D)\n' , (input) => {
      tryCatchKit(
        () => this.movingControl(input), 
        () => this.readMoving()
      );
    });
  },

  movingControl(input) {
    Validata.isMoving(input); 

    this.controller.getMap(input);
    if(!this.controller.isGame()) {
      return this.readGameCommand();
    }
    
    this.readMoving()
  },


  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료:Q)\n', (input) => {
      tryCatchKit(
        () => this.GameCommandControl(input),
        () => this.readGameCommand()
      )
    });
  },

  GameCommandControl(input) {
    Validata.isGameCommand(input); 

    if(this.controller.getRetry(input)) return this.readMoving();
  }
};

module.exports = InputView;

InputView.readBridgeSize()