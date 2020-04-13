// 与えられた数列の平均値を出す
function average(arrey) {
  let sum = 0;

  //   配列の値を合計
  for (let i = 0; i < arrey.length; i++) {
    sum += arrey[i];
    // console.log(arrey[i]);
    // console.log(sum);
  }

  // 合計値を要素数で割る
  let average = sum / arrey.length;

  //   結果表示
  console.log("平均は", average);
}

let numbers = [2, 4, 6, 8,100];
average(numbers);
