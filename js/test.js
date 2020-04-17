function writeLog(b,text){
    console.log(`${b}は${text}です`)
}


let b = 9;
// writeLog(b,"奇数");

(b%2 == true) ? writeLog(b,"奇数") : writeLog(b,"偶数");

(b%3== 0)? writeLog(b,"3の倍数"):writeLog(b,"3で割り切れない")

let check = (b%3 == 0)&&(b>=5);
console.log(check);

