// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b)
{
    if(command === 'add')
    {
        return a + b;
    }
    else if(command === 'substract')
    {
        return a - b;
    }
    else if(command === 'divide')
    {
        return a / b;
    }
    else if(command === 'multiply')
    {
        return a * b;
    }
    else if(command === 'remainder')
    {
        return a % b;
    }
    else
    {
        return 'undefined command';
    }
}

console.log(calculate('add', 3, 7));
console.log(calculate('minus', 5, 2));