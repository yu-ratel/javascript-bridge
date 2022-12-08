class Map {

  constructor() {
    this.topMap = [];
    this.bottomMap = [];
    this.mapCount = 0;
    this.mapSeting = (map) => `[ ${map.join(' | ')} ]`
  }

  isMoving(input, bridge) {
    if(input === bridge[this.mapCount]) {
      this.hitMapDraw(input);
      this.mapCount +=1;
      return;
    }

    this.missMapDraw(input);
    return false;
  }

  hitMapDraw(input) {
    if(input === 'U') {
      this.topMap.push('O')
      this.bottomMap.push(' ')
      return;
    }

    this.bottomMap.push('O')
    this.topMap.push(' ')
  }

  missMapDraw(input) {
    if(input === 'U') {
      this.topMap.push('X')
      this.bottomMap.push(' ')
      return;
    }

    this.bottomMap.push('X')
    this.topMap.push(' ')
  }

  setMap() {
    return `${this.mapSeting(this.topMap)}\n${this.mapSeting(this.bottomMap)}`;
  }

  reset() {
    this.topMap = [];
    this.bottomMap = []; 
    this.mapCount = 0;
  }
}

module.exports = Map;