class Enemy {
    constructor(maxHP, attack) {
      this.maxHP = maxHP;
      this.currHP = maxHP;
      this.attack = attack;
    }
}

export { Enemy };
