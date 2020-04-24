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


//素数チェック
const number = 7;
let sosuuCheck = sosuu(number);
if (sosuuCheck) {
  console.log(`${number}は素数です`);
} else {
  console.log(`${number}は素数ではありません。`);
}
