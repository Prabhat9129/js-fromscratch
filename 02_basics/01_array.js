console.log('ARRAY')                    // ARRAY

const myArray=[0,1,2,3,4,5]
console.log(myArray);                  // [ 0, 1, 2, 3, 4, 5 ]

const myArray1=new Array(1,2,3,4,5,6)
console.log(myArray1);                 // [ 1, 2, 3, 4, 5, 6 ]
console.log(myArray1[0]);              // 1

myArray1.push(7)
console.log(myArray1);                // [ 1, 2, 3, 4, 5, 6, 7 ]

myArray1.push(8)
console.log(myArray1);                // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

myArray1.pop()
console.log(myArray1);                // [ 1, 2, 3, 4, 5, 6, 7 ]

myArray1.unshift(9)
console.log(myArray1);               // [ 9, 1, 2, 3, 4, 5, 6, 7 ]

myArray1.shift()
console.log(myArray1);               // [ 1, 2, 3, 4, 5, 6, 7 ]

console.log(myArray1.includes(9));  // false
console.log(myArray1.indexOf(1));   // 0

const newArr=myArray1.join()

console.log(myArray1);              // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(newArr);                // 1,2,3,4,5,6,7


//slice , splice
console.log('A', myArray);          // A [ 0, 1, 2, 3, 4, 5 ]

const nArr1 = myArray.slice(1,3)
console.log('B', nArr1);            // B [ 1, 2 ]
console.log(myArray);              // [ 0, 1, 2, 3, 4, 5 ]

const nArr2 = myArray.splice(1,3)
console.log('C',nArr2);             // C [ 1, 2, 3 ]
console.log(myArray);              // [ 0, 4, 5 ]