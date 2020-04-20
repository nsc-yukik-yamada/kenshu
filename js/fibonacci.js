
// 初期値から実数の範疇で黄金律の数列を作る
function goldenRule(number) {
  let arrey = [];
  let i = 0;
  do {
    arrey[i] = number;
    number = Math.round(number / 1.618);
    i++;
  } while (number > 1);
  return arrey;
}

function fibonacci(number,count) {
    let arrey = [];
    let i = 0;
    do {
      arrey[i] = number;
      number = Math.round(number * 1.618);
      i++;
    } while (i < count);
    return arrey;
  }
  
  

let arrey =  goldenRule(1597);
console.log(arrey);

let arrey2 = fibonacci(3,5); 
console.log(arrey2);
