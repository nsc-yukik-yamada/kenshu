// バブルソートするプログラム

// 与えられた個数分の数列を作成する;
function getRandomNomber(j) {
  let arrayNumber = [];
  for (let i = 0; i < j; i++) {
    arrayNumber[i] = Math.random() * 100;
    arrayNumber[i] = Math.round(arrayNumber[i]);
  }
  return arrayNumber;
}

//   与えられた数値が一番大きくなる配置を探す
function sortNumberAsc(arrey, number) {
  let lengthNumber = -1;
  for (let i = 0; i < arrey.length; i++) {
    if (arrey[i] >= number) {
      lengthNumber = i;
      break;
    }
  }
  return lengthNumber;
}


// 与えられた数値が一番小さくなる配置を探す
// sortNumberDes(格納先の配列, 追加したい数字)
function sortNumberDes(arrey, number) {
  let lengthNumber = -1;
  for (let i = 0; i < arrey.length; i++) {
    if (arrey[i] <= number) {
      lengthNumber = i;
      break;
    }
  }
  return lengthNumber;
}
// 配列にデータを追加する
function addArrey(sortArrey, sortNumber, number) {
  if (sortNumber < 0) {
    sortArrey.push(number);
  } else {
    sortArrey.splice(sortNumber, 0, number);
  }
  return sortArrey;
}

// フィボナッチ数列を作る関数
// makeFibonacci(数列の初期値,配列の要素数)
function makeFibonacci(number, count) {
  let fibonacci = [number, number];
  for (i = 2; i < count; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }

  return fibonacci;
}

// 素数チェック
// sosuu(チェックしたい数字)
function sosuu(number) {
  let check = true;
  let i = 2;
  while (i < number) {
    if (number % i == 0) {
      check = false;
      break;
    }
    i++;
  }
  // 素数ならtrue,違ったらfalse
  return check;
}

// 問1
//   配列格納
let arrey = getRandomNomber(1);
let sortArrey = []; //並び替え後の配列を格納する。

for (let i = 0; i < arrey.length; i++) {
  // 挿入する配列番号を探す
  let lengthNumber = sortNumberAsc(sortArrey, arrey[i]);
  //   該当の位置に値を挿入する
  sortArrey = addArrey(sortArrey, lengthNumber, arrey[i]);
}

console.log(arrey);
console.log(sortArrey);

// 問2
arrey = getRandomNomber(100);
sortArrey = []; //並び替え後の配列を格納する。
for (let i = 0; i < arrey.length; i++) {
    // 挿入する配列番号を探す
    let lengthNumber = sortNumberDes(sortArrey, arrey[i]);
    //   該当の位置に値を挿入する
    sortArrey = addArrey(sortArrey, lengthNumber, arrey[i]);
  }

  console.log(arrey);
  console.log(sortArrey);

// makeFibonacci(数列の初期値,配列の要素数)
let fibonacci = makeFibonacci(1, 10);
console.log(fibonacci);

//素数チェック
const number = 17;
let sosuuCheck = sosuu(number);
if (sosuuCheck) {
  console.log(`${number}は素数です`);
} else {
  console.log(`${number}は素数ではありません。`);
}
