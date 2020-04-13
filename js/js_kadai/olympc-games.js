let startYear = 1896;

function gameYears(year, startYear) {
  //startYear　からyearまでのオリンピック開催年を
  //console.logを使って表示する。

  // 1行ずつ表示する方法
  while (startYear <= year) {
    console.log(startYear);
    startYear += 4;
  }
}

function gameYearsArrey(year, startYear) {
  //   1行にまとめて表示する方法
  let gameYears = [];
  while (startYear <= year) {
    gameYears.push(startYear);
    startYear += 4;
  }
  console.log(gameYears);
}

// gameYears(2020);
startYear = 1896;
gameYearsArrey(2020, startYear);
