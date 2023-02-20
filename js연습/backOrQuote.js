let str1 = `ddd`;
let str2 = `d
d
d`

console.log(str1);
console.log(str2);

let num1 = 100;
let num2 = 200;
let num3 = 300;

const test1 = () => {
    console.log('첫번째 숫자는 ' + num1 + ', 두번째 숫자는 ' + num2 + '세번째 숫자는 ' + num3 + '이다.')
}

const test2 = () => {
    console.log(console.log(`첫번째 숫자는 ${num1}, 두번째 숫자는 ${num2}, 세번째 숫자는 ${num3}이다.`))
}

// console.time('code_measure');
// test1();
// console.timeEnd('code_measure');


console.time('code_measure');
test2();
console.timeEnd('code_measure');