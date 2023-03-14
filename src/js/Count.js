export default class Count {
  constructor(distance, attack) {
    this.distance = distance;
    this.stoned = false;
    this.attack = attack;
  }

  get attack() {
    let attack = this.aattack;
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    } else if (this.distance === 1) {
      attack -= 100;
    } else if (this.distance === 2) {
      attack -= 90;
    } else if (this.distance === 3) {
      attack -= 80;
    } else if (this.distance === 4) {
      attack -= 70;
    } else if (this.distance === 5) {
      attack -= 60;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this.aattack = value;
  }

  get stoned() {
    return this.sstoned;
  }

  set stoned(value) {
    this.sstoned = value;
  }
}
