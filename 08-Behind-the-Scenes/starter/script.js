'use strict';

// SCOPE
function calcAge(birthYear) {
    const age = 2037 - birthYear
    
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true 
            const firstName = 'Steven'
            const str = `Oh, you're a millenial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a+b
            }

            output = 'NEW OUTPUT'
        }

        // console.log(str);
        console.log(millenial);
        // console.log(add(2,3));
        console.log(output)
    }

    // printAge()

    return age
}

// const firstName = 'Jonas'

calcAge(1991) 

// console.log(age);
// printAge();



// HOISTING
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas'
let job = 'teacher'
const year = 1991

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow);
// console.log(addArrow(2,3));

function addDecl(a, b) {
    return a + b
}

// const addExpr = function(a, b) {
//     return a + b
// }

// var addArrow = (a, b) => a + b

// if (!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
    console.log('All products deleted!');
}


var x = 1
let y = 2
const z = 3


// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);



// THIS KEYWORD
// console.log(this)

const calcAgeThis = function calcAge(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}
// calcAgeThis(1991)

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
}
// calcAgeArrow(1991)

var firstName = 'Matilda'

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);
        
        // SOLUTION 1
        // const self = this
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        // SOLUTION 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial()
    },
    greet: () => {
        console.log(this);
        console.log(`Hey, ${this.firstName}`)
    }
}
jonas.calcAge()
jonas.greet()

const matlida = {
    year: 2017
}

matlida.calcAge = jonas.calcAge
// matlida.calcAge()

// const f = jonas.calcAge
// f()


// Arugments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b
}

addExpr(2, 5)
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
    // console.log(arguments);
    return a + b
}

addArrow(2, 5, 8)

// PRIMITIVE vs OBJECTS

let age = 30
let oldAge = age
age = 31
// console.log(age);
// console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30
}
const friend = me
friend.age = 27
// console.log('Friend', friend);
// console.log('Me', me);

// primitive types
let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
// console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Willaims',
    age: 27,
}

// reference types
const marriedJessica = jessica
marriedJessica.lastName = 'Davis'

// console.log(`Before marriage:`, jessica);
// console.log(`After marriage:`, marriedJessica);
// marriedJessica = {}

// copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Willaims',
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);