// 4月17日のテスト分
// test終了後にメールで送る。1問2分。
//

// 問1　arrayを作り、内部に今晩のおかずを格納する。
// 定数を1つ作成する。数字を格納する。

let yuuhan = ["温泉卵", "サラダ", "切り干し大根"];
// static let teisu = 1; //定数定義する際に最初につける価を確認する。

// 問2　関数を作成して、helloworldと表示する。
function helloWorld() {
  console.log("Hello World!!");
}

helloWorld();

// 引数：arreyの関数を作成する
// 配列の中心の値をログに出す。
function arreyLog(arrey) {
  let i = Math.round(arrey.length / 2);
  console.log(arrey[i]);
}

let arrey = [1, 2, 3];
arreyLog(arrey);

// ifである数字が0~10にあるかどうか
// ない場合、10より大きいかどうか
// 10以下だった場合-5より大きいかどうか

let i = 2; //求める数字

if (i > 0 && i <= 10) {
} else if (i > 10) {
} else if (i > -5) {
}

// loop
// for文で1000スタート0まで数える。
// 半分ずつ数える。10まで

let number = 1000;

for (number; number > 10; number = number / 2) {
  console.log(number);
}

// classを作成する。
// hitoクラスを作る。
// メソッド
// プロパティ：名前、歳
// 名前と歳を言う
class Human {
  constructor(name, toshi) {
    this.name = name;
    this.toshi = toshi;
  }

  aisatu() {
    console.log(`こんにちは。私は${this.name},${this.toshi}歳です。`);
  }
}

let hito = new Human("hito", 20);
hito.aisatu();
