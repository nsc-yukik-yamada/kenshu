// 配列に1~9をセットする。
function setNumber(){
    let arrey = [];
for(let i = 1; i < 10 ; i++){
    arrey.push(i);
}
return arrey;
}

// 与えられた数列と数字を掛けて結果を表示する。
function mash(arrey,number){
    let returnArrey = [];
    for(let i = 0; i < arrey.length ; i++){
        returnArrey.push(arrey[i] * number);
    }
    console.log(number,"の段",returnArrey);
}

// 数列セット
let arrey1 = setNumber();
let arrey2 = setNumber();
console.log("数列1",arrey1);
console.log("数列2",arrey2);

// 九九計算
for(let i = 0; i < arrey1.length ; i++){
    mash(arrey2,arrey1[i]);
}
