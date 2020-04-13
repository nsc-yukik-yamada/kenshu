//全てのキャラクターが共通で持つデータ
class Character {
  constructor(name, hp, mp, weapon) {
    this.name = name;
    this.hp = hp; /* 数値で所持 */
    this.mp = mp; /* 数値で所持 */
    this.weapon = weapon;
  }

  attack(name) {
    console.log(name, "の攻撃 ");
  }
}

//勇者の設定
class Yuusha extends Character {
  constructor(name, hp, mp, weapon) {
    super(name, hp, mp, weapon);
  }
  
}



// 魔法使いの設定
class Wizard extends Character {
    constructor(name, hp, mp, weapon) {
      super(name, hp, mp, weapon);
    }

   magic(name,) {
        console.log(name, "が魔法を使った");
      }
    
  }

//  ヒーラーの設定
class Cleric extends Character {
    constructor(name, hp, mp, weapon) {
      super(name, hp, mp, weapon);
    }

   heal(name,    target) {
        console.log(name, "が",target,"を回復した");
      }
    
  }

  //  バーサーカーの設定
class berseker extends Character {
    constructor(name, hp, mp, weapon) {
      super(name, hp, mp, weapon);
    }

   bersk(name) {
        console.log(name, "が獣化した");
      }
    
  }


  
let hero = new Yuusha("勇者", 100, 25, "剣");
console.log(hero);
hero.attack(hero.name);


