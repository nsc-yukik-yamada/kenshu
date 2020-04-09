let number =　5;
let total;

// 1～10の間なら計算する、範囲外の場合エラー表示
if (number > 0 && number <= 10) {

  total = Mult(number); /*計算式呼び出し*/
  console.log(total);

} else {

  console.log("1～10の間で設定してください。");

}

// 与えられた数字を1になるまでかけ算する
function Mult(number) {

  let total = 1;　/* 変数初期化 */

  while (number > 0) {
    total = total * number;

    number--;
  }

  return total;　/* 結果を返す */
}
