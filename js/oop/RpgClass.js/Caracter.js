//全てのキャラクターが共通で持つデータ
class Character {
  constructor(race, name, hp, mp, weapon) {
    this._race = race;
    this.name = name;
    this.hp = hp; /* 数値で所持 */
    this.mp = mp; /* 数値で所持 */
    this.weapon = weapon;
  }

  get race(){
      return this._race;
    }

  attack() {
      let damage = makeDamage(this.weapon);
    console.log(this.name, "の攻撃 ",damage,"点のダメージ！");
  }
}

//勇者の設定
class Yuusha extends Character {
  constructor(race,name, hp, mp, weapon) {
    super(race,name, hp, mp, weapon);
  }
  
}



// 魔法使いの設定
class Wizard extends Character {
    constructor(race,name, hp, mp, weapon) {
      super(race,name, hp, mp, weapon);
    }

   magic() {
        console.log(this.name,'が魔法を使った');
      }
    
  }

//  ヒーラーの設定
class Cleric extends Character {
    constructor(race, name, hp, mp, weapon) {
      super(race,name, hp, mp, weapon);
    }

   heal(target) {
        console.log(this.name, "が",target,"を回復した");
      }
    
  }

  //  バーサーカーの設定
  class Berseker extends Character {
      constructor(race, name, hp, mp, weapon) {
        super(race, name, hp, mp, weapon);
      }
  
     bersk() {
          console.log(this.name, "が獣化した");
        }
      
    }
  
    //   エネミーデータ
  class Monster extends Character {
      constructor(race,name, hp, mp, weapon,rank) {
        super(race,name, hp, mp, weapon);
        this.rank=rank;　//1:ノーマル,9:ボス
      }
  
    //   ボス以外の敵は逃げる
     escape() {
         if(this.rank != 9){
             console.log(this.name, "は逃げ出した！");
         }
        }
      
    }
  

// 武器テーブル
function putWeapon(weapon){
    let pewer;
    switch(weapon){
        case '剣':
            return pewer=5;
            console.log(pewer);
            break;
            case '杖':
                return pewer=2;
                break;
                case 'メイス':
                    return pewer=3;
                    break;
                    case '大剣':
                        return pewer=8;
                        break;
                        default:
                            return pewer=0;
                            break;
                            
                        }
                    }

//   ダメージ量を決定する。
  function makeDamage(weapon) {

      let pewer = putWeapon(weapon);
    let damage = Math.random() * 10;
    damage = Math.round(damage)+ pewer;
    return damage;
  }

  
let hero = new Yuusha("人","勇者", 100, 25, "剣");
console.log(hero);
hero.attack();
console.log(hero.race);

let npc = new Character("エルフ","勇者", 100, 25, "剣");
console.log(npc);
console.log(npc.race);
npc.race = "人";
console.log(npc.race);



// let wizard = new Wizard("人","魔法使い", 40, 80, "杖");
// console.log(wizard);
// wizard.magic();

// let cleric = new Cleric("人","僧侶", 60, 50, "メイス");
// console.log(cleric);
// cleric.heal(hero.name)


// let berserk = new Berseker("人","バーサーカー", 100, 25, "剣");
// console.log(berserk);
// berserk.bersk();
// berserk.attack();

// let slime = new Monster("モンスター","スライム",20,0,"なし",1);
// console.log(slime);
// slime.escape();


// let vampire= new Monster("アンデッド","ヴァンパイア",500,150,"なし",9);
// console.log(vampire);
// vampire.escape();

