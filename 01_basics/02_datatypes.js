"use strict";//treat all js code as newer version.
//alert(3 + 3) we are using Node.js not Browser
console.log(3
    +
    3) // this is allowed but code readability should be first priority so do'nt do this .
console.log(3+3)// write like this.

let age=21
let isLoggedIn=false
let firstName='prabhat'
let state
/*
There are seven primitive data types.
String => used for Sequence of characters,text.
Number => used for floating point numbers,desimals & integers, hold value upto 2 pwr 53.
Boolean => Logical value like true or false.
Undefined => Empty value.
Null => Assign null/empty value, Standalone value.
Symbol => ES(2015) value is unique and cannot be changed.
BigInt => ES(2020) Larger integers.
*/
console.log(typeof age) //Number.
console.log(typeof undefined) //undefined.
console.log(typeof null) //Object it's an Error in javascript.
console.log(typeof isLoggedIn) //Boolean.
console.log(typeof state) //undefined.
console.log(typeof firstName) //undefined.