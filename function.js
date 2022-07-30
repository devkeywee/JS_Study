// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello()
{
    console.log('Hello');
}
printHello();

function log(message)
{
    console.log(message);
}
log('Hello@');
log(1234);  //파라미터의 자료형을 알 수 없다는 단점 -> TS로 보완

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj)
{
    obj.name = 'coder';
}
const doong = { name: 'doong' };
changeName(doong);
console.log(doong);

// 3. Default parameters
function showMessage(message, from = 'unknown') //디폴트 파라미터를 바로 정해줄 수 있음
{
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters
function printAll(...args)  //배열 형태로 파라미터 전달
{
    for(let i = 0; i < args.length; i++)
    {
        console.log(args[i]);
    }

    for(const arg of args)
    {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('study', 'coding', 'doong');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage()
{
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother()
    {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // 오류 발생
}
printMessage();

// 6. Return a value
function sum(a, b)
{
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user)
{
    if(user.point > 10)
    {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user)
{
    if (user.point <= 10)
    {
        return;
    }
    // long upgrade logic...
}  // 조건이 맞지 않을 땐 빨리 함수를 return 하는 것이 좋음

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function ()  // anonymous function
{
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo)
{
    if(answer === 'love you')
    {
        printYes();
    }
    else
    {
        printNo();
    }
}
// anonymous function
const printYes = function()
{
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print()
{
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
//const simplePrint = function ()
//{
//    console.log('simplePrint!');
//};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) =>
{
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello()
{
    console.log('IIFE');
})();   // 선언과 동시에 함수 호출
