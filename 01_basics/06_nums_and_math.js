// normal Number 
const num=3004343562.333
console.log(num);

// Number Constructor
const balance = new Number(200)
console.log(balance);

// Number Properties
console.log(Number.MAX_SAFE_INTEGER);    //=> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    //=> -9007199254740991
console.log(Number.MAX_VALUE);           //=> 1.7976931348623157e+308
console.log(Number.MIN_VALUE);           //=> 5e-324
console.log(Number.NaN);                 //=> NaN
console.log(Number.NEGATIVE_INFINITY);   //=> -Infinity
console.log(Number.POSITIVE_INFINITY);   //=> Infinity

//Number methods

console.log(Number.isFinite(10/2));       //=> True
console.log(Number.isFinite(1));          //=> True
console.log(Number.isFinite(1/0));        //=> false
console.log(Number.isFinite(0/0));        //=> false
console.log(Number.isFinite('0'));        //=> false

console.log(Number.isInteger(-2));        //=> true
console.log(Number.isInteger(0));         //=> true
console.log(Number.isInteger(2));         //=> true
console.log(Number.isInteger(0.1));       //=> false
console.log(Number.isInteger('8'));       //=> false
console.log(Number.isInteger(Math.PI));   //=> false
console.log(Number.isInteger(NaN));       //=> false

console.log(Number.isNaN(NaN));           //=> true
console.log(Number.isNaN(0/0));           //=> true
console.log(Number.isNaN(4));             //=> false

console.log(Number.isSafeInteger(2));     //=> true
console.log(Number.isSafeInteger(3.2));   //=> false
console.log(Number.isSafeInteger("3"));   //=> false

console.log(Number.parseFloat('5.000'*Math.PI));  //=> 15.707963267948966
console.log(Number.parseFloat('abc'));            //=> NaN
console.log(Number.parseFloat('1.3WWW'));         //=> 1.3
console.log(Number.parseInt('23.56'));            //=> 23

console.log(balance.toExponential(3));            //=> 2.000e+2
console.log(Math.PI.toFixed(2));                  //=> 3.14
console.log(balance.toFixed(3));                  //=> 200.000

console.log(balance.toString().length);           //=> 3
console.log(balance.toString());                  //=> "200"
console.log(num.toLocaleString());                //=> 3,004,343,562.333
console.log(num.toLocaleString('en-IN'));         //=> 3,00,43,43,562.333

console.log(num.toPrecision(5));                   //=> 3.0043e+9
console.log(num.toPrecision(11));                  //=> 3004343562.3
console.log(num.toPrecision(10));                  //=> 3004343562

console.log(balance.valueOf());                   //=> 200


//++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++

//Math is global Object
console.log(Math);

//Math properties

console.log(Math.PI);               //=> 3.141592653589793
console.log(Math.SQRT1_2);          //=> 0.7071067811865476
console.log(Math.SQRT2);            //=> 1.4142135623730951

//Math methods

console.log(Math.abs(-19));         //=> 19
console.log(Math.round(4.6));       //=> 5
console.log((Math.round(4.2)));     //=> 4

console.log((Math.ceil(4.2)));      //=> 5
console.log(Math.ceil(4.6));        //=> 5

console.log(Math.floor(4.7));       //=> 4
console.log(Math.floor(4.2));       //=> 4

console.log(Math.min(4,9,6,7));     //=> 4
console.log(Math.max(4,9,6,7));     //=> 9

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

