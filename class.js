'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    // constructor
    constructor(name, age)
    {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak()
    {
        console.log(`${this.name}: hello!`);
    }
}

const doong = new Person('doong', 25);
console.log(this.name);
console.log(this.age);
doong.speak();

// 2. Getter and setters
class User
{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //this.age는 get age()를 = age는 set age를 호출. 이때 recursion이 발생하므로 변수 이름 앞에 _ 넣어주기
    }

    get age()
    {
        return this._age;
    }

    set age(value)
    {
        if (value < 0)
        {
            throw Error('age can not be negative');
        }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// 최근에 추가됨
class Experiment
{
    publicField = 2;
    #privateField = 0;  //class 내에서만 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
