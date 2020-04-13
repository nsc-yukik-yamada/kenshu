// 配列に与えられた数字までをセットする。
function setNumber(number){
    let arrey = [];
for(let i = 1; i <= number ; i++){
    arrey.push(i);
}
return arrey;
}

// 与えられた数列と数字を掛けて結果を表示する。
function mash(arrey,number){
    let text = "";
    for(let i = 0; i < arrey.length ; i++){
        text += (String(arrey[i] * number)+" ");
    }
    console.log(text);
}

// 与えられた数列と数字を掛けて結果を文字列として表示する。
function mash2(arrey,number){
    let text = "";
    for(let i = 0; i < arrey.length ; i++){
        //0埋めした3桁の文字列を作成
        text += (("000"+ String(arrey[i] * number)).slice(-3)+ " ");
    }
    console.log(text);
}

// 数列セット
let arrey1 = setNumber(10);
let arrey2 = setNumber(10);
console.log("数列1",arrey1);
console.log("数列2",arrey2);

// 九九計算（数列として）
for(let i = 0; i < arrey1.length ; i++){
    mash(arrey2,arrey1[i]);
}

// 九九計算（文字列として）
for(let i = 0; i < arrey1.length ; i++){
    mash2(arrey2,arrey1[i]);
}

