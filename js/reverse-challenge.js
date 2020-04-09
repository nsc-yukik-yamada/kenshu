//変数定義
let num1 = 5 , num2 = 8;

//pattern 1
console.log("pattern1");
pattern1(num1, num2);

//pattern 2
console.log("pattern2");
pattern2(num1, num2);


//pattern 1
//変数を使うタイプ
function pattern1(num1, num2) {
  writeLog("before", num1, num2);

  let chenge = num1;
  num1 = num2;
  num2 = chenge;

  writeLog("after", num1, num2);
}

//pattern2
// 変数を使わないタイプ
function pattern2(num1, num2) {
  writeLog("before", num1, num2);

  num1 = num1 + num2;
  num2 = -num2 + num1;
  num1 = num1 - num2;

  writeLog("after", num1, num2);
}

// ログの書き出し
function writeLog(message, num1, num2) {
  console.log(message);
  console.log("num1: ", num1);
  console.log("num2: ", num2);
}


