const { makeBridge } = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');
test('주어진 길이에 따라 다리가 생성 되는지', () => {
  const size = [3, 5, 10]
  size.forEach((index) => {
    expect(makeBridge(index, generate).length).toBe(index)
  })
})
