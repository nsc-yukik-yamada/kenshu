//  length: 縦の長さ
//  width: 横の長さ
let length = 8;
let width = 9;

// 長さのチェック長さが1～1000の範囲内ならture
function checkSize(name, size) {
  let checkSize;
  if (size > 0 && size <= 1000) {
    checkSize = true;
  } else {
    checkSize = false;
    console.log(name, "の長さを1～1000の間で指定してください");
  }
  return checkSize;
}

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

// 縦横の長さが指定範囲内かチェック
let lengthSize = checkSize("縦", length);
let widthSize = checkSize("横", width);

// サイズが指定範囲の場合、面積・周囲の長さを出す。
if (lengthSize == true && widthSize == true) {
  //  面積計算の関数呼び出し
  let area = getAria(length, width);
  console.log("面積は", area);

  // 周囲を求める関数の呼び出し
  let perimeter = getPerimeter(length, width);
  console.log("周囲の長さは", perimeter);
}
