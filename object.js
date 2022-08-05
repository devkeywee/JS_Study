// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person)
{
    console.log(person.name);
    console.log(person.age);
}

const doong = { name: 'doong', age: 4 };
print(doong);

// with JavaScript magic (dynamically typed language)
// can add properties later
doong.hasJob = false;
console.log(doong.hasJob);

delete doong.hasJob;
console.log(doong.hasJob);

// 2. Computed properties
// key should be always string
console.log(doong.name);
console.log(doong['name']);
doong['hasJob'] = false;
console.log(doong.hasJob);

function printValue(obj, key)  // 동적으로 key의 값을 받아야 할 때 유용
{
    console.log(obj[key]);
}
printValue(doong, 'name');
printValue(doong, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('doong', 25);
console.log(person4);
function makePerson(name, age)
{
    return {
        name, // key와 value의 이름이 같다면 생략 가능
        age,
    };
}

// 4. Constructor Function
function Person(name, age)  // class에서 object를 만드는 것처럼 가능
{
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
const person5 = new Person('doong', 25);

// 5. in operator: property existence check (key in obj)
console.log('name' in doong);
console.log('age' in doong);
console.log('random' in doong);
console.log(doong.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in doong)
{
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array)
{
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'doong', age: '25'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user)
{
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);  // 뒤에 있는 애가 앞에 있는 애를 덮어씌움
console.log(mixed.color);
console.log(mixed.size);
