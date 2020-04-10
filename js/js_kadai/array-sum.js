let numbers = [1,2,3];
// arrayの文字数獲得
var length = numbers.length;

function arraySumWithFor(array) {
    let sum = 0;
    //For を使ってarray の合計を計算してください。
    for (let i = 0; i < length; i++) {
        sum +=  numbers[i];
    } 

    return sum;
}

function arraySumWithWhile(array) {
    let sum = 0;
    let i = 0
    //While を使ってarray の合計を計算してください。
    while(i < length){
        sum +=  numbers[i];
        i++;
    }

    return sum;
}

function arraySumWithDoWhile(array) {
    let sum = 0;
    let i = 0;
    
        //Do While を使ってarray の合計を計算してください。

do
{
    if(length == 0){break}
    sum +=  numbers[i];
    i++;  

}
while(i < length)

    return sum;
}

function arraySumWithForEach(array) {
    
    let sum = 0;
    //ForEach を使ってarray の合計を計算してください。
    array.forEach(function(value)  {
        
        sum +=  value;
    });
 
    return sum;
}

let forSum = arraySumWithFor(numbers);
let whileSum = arraySumWithWhile(numbers);
let doWhileSum = arraySumWithDoWhile(numbers);
let forEachSum = arraySumWithForEach(numbers);

console.log(`For文での合計: ${forSum}`);
console.log(`While文での合計: ${whileSum}`);
console.log(`doWhile文での合計: ${doWhileSum}`);
console.log(`ForEach文での合計: ${forEachSum}`);