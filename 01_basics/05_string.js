const firstName=" prabhat  "
const a="prabhat"
const b="prabhat"
const c="PRABHAT"
const repoCount=20

// normal string
console.log("My name is "+firstName +" and " +"Resository count is "+repoCount);

//string Interpolation
console.log(`My name is ${firstName.trim()} and my Repo count is ${repoCount}`)

//String Constructor
const gameName=new String("The first react app is app todo-App-prabhat and app1 app2")
console.log(gameName);
console.log(gameName.__proto__) //=> {}.

//String properties
console.log(gameName.length) //=>51 length is property.

//String Methods
console.log(gameName.at(2))   //=> d.
console.log(gameName.at(-2))  //=> a.

console.log(gameName.charAt(10))      //=> r.
console.log(gameName.charCodeAt(10))  //=>114.
console.log(gameName.codePointAt(10)) //=>114.

console.log(firstName.concat('your app game',gameName)); //=>prabhat  your app gametodo-app-prabhat

console.log(gameName.endsWith('hat'))       //true
console.log(gameName.endsWith('prabha'))    //false
console.log(gameName.endsWith('prabha',15)) //true

console.log(gameName.includes('App'))   //=>false
console.log(gameName.indexOf('app'))    //=>16
console.log(gameName.indexOf('app',17)) //=>23

console.log(gameName.lastIndexOf('app'))    //=>48
console.log(gameName.lastIndexOf('app',20)) //=>16

console.log(a.localeCompare(b)); //=>0-> it's equivalent
console.log(a.localeCompare(c)); //=>-1-> it's before when 1-> occurs after

const regex=/[A-Z]/g;
console.log(gameName.match(regex)); //Array -> ['T', 'A']
// const regexp=/a(p)(p(\d?))/g
// const array=[...gameName.matchAll(regexp)]
// console.log(array)
//const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
// const name1NFC = name1.normalize('NFC'); =>returns the Unicode Normalization Form of the string

console.log(a.padEnd(10,'*'));   //=>"prabhat***"
console.log(a.padEnd(10));       //=>"prabhat   "
console.log(a.padEnd(12,'e'));   //=>"prabhateeeee"
console.log(a.padEnd(1));        //=>"prabhat"

console.log(a.padStart(10,'*')); //=>"***prabhat"
console.log(a.padStart(10));     //=>"   prabhat"
console.log(a.padStart(12,'e')); //=>"eeeeeprabhat"
console.log(a.padStart(1));      //=>"prabhat"

// console.log(a.repeat(-1));    //=>Invalid count value
console.log(a.repeat(0));        //=>""
console.log(a.repeat(1));        //=>"prabhat"
console.log(a.repeat(3));        //=>"prabhatprabhatprabhat"
console.log(a.repeat(4.5));      //=>"prabhatprabhatprabhatprabhat" consider as integer
// console.log(a.repeat(1/0));   Invalid count value

console.log(a.replace('bhat','shant'))   //=>prashant
console.log(gameName.replace('-','='));  //=>The first react app is app todo=App-prabhat and app1 app2
console.log(gameName.replaceAll('-','=')); //=>The first react app is app todo=App=prabhat and app1 app2

console.log(gameName.search('app'));  //=>16
console.log(gameName);
console.log(gameName.slice(44));      //=> and app1 app2
console.log(gameName.slice(23,44));   //=> app todo-App-prabhat
console.log(gameName.slice(-4));      //=> app2
console.log(gameName.slice(-9,-4));   //=> app1
console.log(gameName.slice(57));      //=> ""
console.log(gameName.split(' '));     //=> ['The','first','react','app','is','app','todo-App-prabhat','and','app1','app2']

console.log(gameName.split(' ',22));
console.log(gameName.startsWith('The'));  //=> true
console.log(gameName.startsWith('The',3));//=> false

console.log(gameName.substring(27));      //=> todo-App-prabhat and app1 app2
console.log(gameName.substring(27,43));   //=> todo-App-prabhat
console.log(c.toLocaleLowerCase());       //=> prabhat
console.log(c.toLocaleLowerCase("en-us"));//=> prabhat
console.log(b.toLocaleUpperCase());       //=> PRABHAT
console.log(b.toLocaleUpperCase("en-US"));//=> PRABHAT
console.log(gameName.toString());         //=> The first react app is app todo-App-prabhat and app1 app2 , convert object into string.

console.log(c.toLowerCase());     //=> prabhat, without modifying original string
console.log(b.toUpperCase());     //=> PRABHAT, without modifying original string
console.log(firstName.trim());    //=> prabhat, without modifiying original string 
console.log(firstName.trimEnd()); //=>" prabhat", without modifying original string
console.log(firstName.trimStart());//=>"prabhat ",without modifying original string
console.log(gameName.valueOf());   //=>return primitive value of given object
