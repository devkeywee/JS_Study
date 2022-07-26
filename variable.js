// 1. Use strict
// Vanila Javascript에서 사용
'use strict';

// 2. Variable
// let을 이용하여 변수 선언
let globalName = 'global name';
{
    let name = 'doong';
    console.log(name);
    name = 'hello';
    console.log(name);
}       //block을 이용하여 변수를 선언하면 block 안에서만 접근 가능
console.log(name);
console.log(globalName);
// var 는 사용하지 말것
// var hoisting 문제
// block scope이 없음

// 3. Constant
//한번 할당하면 값을 변경할 수 없음
//안전함
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// 숫자 자료형 number (선언하지 않아도 사용 가능)

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
// 글자수에 상관없이 모두 string
// +를 이용하여 다른 string과 결합 가능
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// symbol
// 고유한 식별자를 만들 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// Symbol 값은 .description을 이용하여 변환해서 출력해야 함

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));  //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));