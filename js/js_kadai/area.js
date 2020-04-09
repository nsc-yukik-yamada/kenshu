//  length: 縦の長さ
//  width: 横の長さ
let length = 5;
let width = 3;

//  面積計算の関数呼び出し
let area = getAria(length, width);
console.log("面積は", area);

// 周囲を求める関数の呼び出し
let perimeter = getPerimeter(length, width);
console.log("周囲の長さは", perimeter);

//  四角の面積を計算する式。
function getAria(length, width) {
  let area;
  area = length * width;
  return area;
}

//  四角の周囲を計算する式。
function getPerimeter(length, width) {
  let perimeter;
  perimeter = (length + width) * 2;
  return perimeter;
}
