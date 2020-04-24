//商品を表すクラス

class Product {
  //クラス必須メソッド

  constructor(name, price, amount) {
    this._name = name;

    this._price = price;

    this._amount = amount;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get price() {
    return this._price;
  }

  changePrice(price) {
    this._price = price;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }
}

//買い物かごを表すクラス

class Cart {
  constructor() {
    this._productList = [];
  }

  get producTList() {
    return this._productList;
  }

  //商品を追加

  addProduct(product, count) {}

  //商品をすべて消す

  emptyCart() {}

  //商品を取り出す

  removeProduct(product, count) {}
}

//買い物かごの中の商品と数を表すクラス

class CartItem {
  constructor(product, count) {
    this._product = product;
    this._count = count;
  }

  get product() {
    return this._product;
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
  }

  getUnitPrice() {
    return this._product.price;
  }

  getPrice() {
    return this.getUnitPrice() * this._count;
  }
}

//レシートを表したクラス

class Receipt {
  constructor() {
    //買い物の日付

    this.date = new Date();

    //買った商品のリスト

    this.productList = [];
  }

  //買った商品を追加する　C

  addProduct(product, count) {
    //買った商品をリストに追加する
    let item = new CartItem(product, count);//または既に出来ているオブジェクトを引数で貰う
    if(){ //リストの中から同じ商品名のものがないかを検索する
        //商品の名前が一緒だったら数だけを追加する
    }else {
        this.productList.push(item);
        this.productList[0].getPrice();
        //商品をそのまま追加する
    }
  }

  //合計を書き出す　B

  _sumCart() {
    //CratItemのgetPriceの合計を出す。
    //productListの中身を合計する。
    //合計を変数に格納して返す。
  }

  //出力する　A
  createReceipt() {
    //addProduct、_sumCartを使う
    //書き出すための処理
    //日付  Wed Apr 22 2020 10:14:46 GMT+0900 (Japan Standard Time)
    console.log(this.date);

    //productList => 商品名　(一つの値段　＊　数)　合計の値段
    for (let i = 0; i < this.productList.length; i++) {
      //Listの件数分中身を書き出す。
      let price = CartItem.getPrice(); //合計金額を求めるメソッドを呼び出す
      console.log(`商品${this.productList[i]} 金額${price}`);
    }
    //合計　=> _sumCart の戻り値
    let sumPrice = this._sumCart();
    console.log(`合計${sumPrice}`);

    //書き出したタイミングでオブジェクトを空にする
    this.date = "";
    this.productList = [];
  }
}

