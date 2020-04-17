// 任意の数字が5つ入っているarrayの数字の足し算の組み合わせで、
// 最大の和と最小の和を出すプログラムを作成してください。

// 入力された数字ふたつを比較して最大値を返す関数
function getMaxNumber(number, maxNumber) {
  if (number > maxNumber) {
    maxNumber = number;
  }
  return maxNumber;
}

// 入力された数字ふたつを比較して最小値を返す関数
function getMinNumber(number, minNumber) {
  if (number < minNumber) {
    minNumber = number;
  }
  return minNumber;
}

// 配列にランダムな整数5つを格納して返す
function getRandomNomber() {
  let arrayNumber = [];
  for (let i = 0; i < 5; i++) {
    arrayNumber[i] = Math.random() * 10;
    arrayNumber[i] = Math.round(arrayNumber[i]);
  }
  return arrayNumber;
}

function compareFunc(a, b) {
  return b - a;
}

let maxNumber = 0;
let minNumber = 100;

let arrey1 = getRandomNomber();
let arrey2 = getRandomNomber();

// 関数使って一つずつ比較
for (let i = 0; i < arrey1.length; i++) {
  for (let j = 0; j < arrey2.length; j++) {
    let number = arrey1[i] + arrey2[j];
    maxNumber = getMaxNumber(number, maxNumber);
    minNumber = getMinNumber(number, minNumber);
    // console.log(`現在値：${number}　最大値：${maxNumber}　最小値：${minNumber}`);
  }
}
console.log(`数列${arrey1},数列${arrey2}`);

console.log(`最大値は${maxNumber}`);
console.log(`最小値は${minNumber}`);

maxNumber = 0;
minNumber = 100;

arrey1 = getRandomNomber();
arrey2 = getRandomNomber();

// 一度全部配列に格納してソートするやり方
let arreySum = [];
for (let i = 0; i < arrey1.length; i++) {
  for (let j = 0; j < arrey2.length; j++) {
    arreySum.push(arrey1[i] + arrey2[j]);
  }
}
arreySum = arreySum.sort(compareFunc);
// console.log(arreySum);
maxNumber = arreySum.shift();
minNumber = arreySum.pop();
console.log(`数列${arrey1},数列${arrey2}`);
console.log(`最大値は${maxNumber}`);
console.log(`最小値は${minNumber}`);

