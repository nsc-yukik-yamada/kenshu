// 偶数奇数を表示
function writeOdd(number){
  if (number % 2) {
    console.log(number,"は奇数です");
  }else{
    console.log(number,"は偶数です");
  }
}

//コンソールに「奇数です」と表示される
let number = 5;
writeOdd(number);

//コンソールに「偶数です」と表示される
number = 2;
writeOdd(number);

// 配列に格納
let numbers = [1, 2, 3, 4, 3, 2, 1];
var arrey1 =[],arrey2=[];
for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i]% 2) {
    arrey1.push(numbers[i]);
  }else{
    arrey2.push(numbers[i]);
  }
}
console.log(arrey1);
console.log(arrey2);

