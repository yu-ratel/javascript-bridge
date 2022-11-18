const { Console } = require("@woowacourse/mission-utils");
const BridgeValidtion = require('../src/Validtion');

afterAll(() => Console.close());

describe("에러 테스트", () => {
  test('3~20의 다리길이가 입력되지 않았을 때 오류를 던지는지 ', () => {
    const bridgeLength = [0, 2, 21];
    
    bridgeLength.forEach((bridge) => {
      expect(() => BridgeValidtion.validateBridge(bridge)).toThrow('[ERROR]');
    });
  });
  test('숫자가 들어오지 않았을 경우 오류를 던지는지 ', () => {
    const bridgeLength = ['a', '1a', ' '];

    bridgeLength.forEach((bridge) => {
      expect(() => BridgeValidtion.validateBridge(bridge)).toThrow('[ERROR]');
    });
  });

  test('건너갈 다리의 입력값이 한자리가 아닐 경우 오류를 던지는지 ', () => {
    const userInput = ['As', ''];

    userInput.forEach((input) => {
      expect(() => BridgeValidtion.validateSelect(input)).toThrow('[ERROR]');
    });
  });
  test('건너갈 다리의 입력값이 U 와 D 가 아닐경우 오류를 던지는지 ', () => {
    const userInput = ['X', ' ', '.', '0'];

    userInput.forEach((input) => {
      expect(() => BridgeValidtion.validateSelect(input)).toThrow('[ERROR]');
    })
  })
});