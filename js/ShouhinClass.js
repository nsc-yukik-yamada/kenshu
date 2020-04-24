// 商品　クラス　必要なもの
// 商品名
// 値段
// 分類（野菜・肉類・魚類等）
// 在庫数
class Prodact {
  constructor(prodactName, price, type, stock) {
    this._prodactName = prodactName;
    this._price = price;
    this._type = type;
    this._stock = stock;
  }

  get prodactName() {
    return this._prodactName;
  }
  get price() {
    return this._price;
  }
  get type() {
    return this._type;
  }
  get stock() {
    return this._stock;
  }
  changeStock(){
      this._stock = stock;
  }
}

// 買い物かご　クラス(配列として使用する)
// 商品名
// 値段
// 個数
//
// メソッド：商品を50音順で並べ替える
class Baket  {
  constructor() {
    this._list=[];
  }

//   sort キーを確認する。
  sortName() {
    Baket(function(a, b){
        a =a[key].prodactName;
        b =b[key].prodactName;
      return a-b;
    });
  }
}

s = new Prodact("にんじん", 80, "野菜", 5);
console.log(s);
console.log(s.prodactName);

let sBaket = [];
sBaket[0] = new Baket(s.prodactName, s.price, 3);
sBaket[1] = new Baket("カボチャ", s.price, 1);
console.log(sBaket);
// sBaket.sortName();
// console.log(sBaket);
