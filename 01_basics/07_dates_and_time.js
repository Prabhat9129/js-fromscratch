// Dates

let myDate= new Date();
console.log(myDate);                               //=> 2023-08-10T11:18:22.549Z
console.log(myDate.toString());                   //=> Thu Aug 10 2023 11:18:22 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());               //=> Thu Aug 10 2023
console.log(myDate.toISOString());                //=> 2023-08-10T11:18:22.549Z
console.log(myDate.toJSON());                     //=> 2023-08-10T11:18:22.549Z
console.log(myDate.toLocaleDateString());         //=> 8/10/2023
console.log(myDate.toLocaleDateString("en-IN"));  //=> 10/8/2023
console.log(myDate.toLocaleString());             //=> 8/10/2023, 11:18:22 AM
console.log(myDate.toLocaleString("en-IN"));      //=> 10/8/2023, 11:18:22 am
console.log(myDate.toLocaleTimeString());         //=> 11:18:22 AM
console.log(myDate.toLocaleTimeString("en-IN"));  //=> 11:18:22 am
console.log(myDate.toTimeString());               //=> 11:18:22 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 4, 55)

console.log(myCreatedDate);                         //=> 2023-01-23T04:55:00.000Z
console.log(myCreatedDate.toLocaleString("en-IN")); //=> 23/1/2023, 4:55:00 am

// let myCreatedDate = new Date("2023-08-10")
console.log(myCreatedDate.toLocaleString("en-IN")); //=> 10/8/2023, 12:00:00 am

let myCreatedDate = new Date("08-10-2023")
console.log(myCreatedDate.toLocaleString());   //=> 8/10/2023, 12:00:00 AM


// +++++++++++++++++ time ++++++++++++++++++++++++++++

let myTimeStamp = Date.now()
console.log(myTimeStamp);           //=> 1691667256388
console.log(myCreatedDate.getTime()); //=> 1691625600000
console.log(Math.floor(Date.now() / 1000)); //=> 1691667517

let newDate = new Date()
console.log(newDate);                   //=> 2023-08-10T11:50:35.681Z
console.log(newDate.getDate());         //=> 10
console.log(newDate.getFullYear());     //=> 2023
console.log(newDate.getMonth());        //=> 7
console.log(newDate.getDay());          //=> 4
console.log(newDate.getHours());        //=> 11
console.log(newDate.getMinutes());      //=> 50
console.log(newDate.getSeconds());      //=> 35
console.log(newDate.getMilliseconds()); //=> 681


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));