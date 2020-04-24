// 与えられた個数分の数列を作成する;
function getRandomNomber(j) {
  let arrayNumber = [];
  for (let i = 0; i < j; i++) {
    arrayNumber[i] = Math.random() * 100;
    arrayNumber[i] = Math.round(arrayNumber[i]);
  }
  return arrayNumber;
}

// 挿入ソート
//   与えられた数値が一番大きくなる配置を探す
function sortNumberAsc(arrey) {
  let sortArrey = []; //並び替え後の配列を格納する。
  for (let i = 0; i < arrey.length; i++) {
    // 挿入する配列番号を探す
    let lengthNumber = -1;
    for (let j = 0; j < sortArrey.length; j++) {
      if (arrey[j] >= arrey[i]) {
        lengthNumber = j;
        sortArrey.splice(j, 0, arrey[i]);
        break;
      }
    }

    if (lengthNumber < 0) {
      sortArrey.push(arrey[i]);
    }
  }
  return sortArrey;
}

// バブルソートをするプログラム
function bubleSort(arrey) {
  let i = arrey.length;
  while (i >= 0) {
    i--;
    let j = i;
    while (j >= 0) {
      j--;
      if (arrey[i] < arrey[j]) {
        let number = arrey[i];
        arrey[i] = arrey[j];
        arrey[j] = number;
      }
    }
  }
  return arrey;
}



let arrey = getRandomNomber(5);
let sortArrey = sortNumberAsc(arrey);

console.log(arrey);
console.log(sortArrey);

let arrey2 = getRandomNomber(5);

console.log("バブルソート");
console.log(arrey2);
let bubleArrey = bubleSort(arrey2);
console.log(bubleArrey);
