// 偶数・奇数を判断
function checkNumber(number) {
  let check;
  if (number % 2) {
    // console.log("奇数です");
    check = true;
  } else {
    // console.log("偶数です");
    check = false;
  }
  return check;
}

// 偶数奇数を表示
function writeOdd(number,check){
  if (check == true) {
    console.log(number,"は奇数です");
  }else{
    console.log(number,"は偶数です");
  }
}

let check;

//コンソールに「奇数です」と表示される
let number = 5;
check = checkNumber(number);
writeOdd(number,check);

//コンソールに「偶数です」と表示される
number = 2;
check = checkNumber(number);
writeOdd(number,check);

// 配列に格納
let numbers = [1, 2, 3, 4, 3, 2, 1];
var arrey1 =[],arrey2=[];
for (let i = 0; i < numbers.length; i++) {
   check = checkNumber(numbers[i]);
  if (check == true) {
    arrey1.push(numbers[i]);
  }else{
    arrey2.push(numbers[i]);
  }
}
console.log(arrey1);
console.log(arrey2);

