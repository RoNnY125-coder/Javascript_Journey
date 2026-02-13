"use strict"; // for newer version of javascript
//alert(3+3) // wont run because this is not browser , its node js
//code should be readable

//data types:-
//-------primitive data types--------- 
//integer => 2 to the the power 53
//string => ""
//boolean => true / false
//null => Standalone value
//unidentified => not identified 
//symbol => unique (used mostly in figma and react)

//object
// console.log(typeof null); // it treates it as object which is a mistake of the language itself (Interview question)
// console.log(typeof undefined); // it shows correct output

//--------data type conversion---------
// let score = "33"
// console.log(typeof score) // it shows the datatype all in lowercase

// let newvalue=Number(score) // when changing the datatype , it should start capital 
// console.log(typeof newvalue)

// let score2="33abc"
// let new2value=Number(score2)
// console.log(new2value) // it shows NaN which means not a number
// console.log(typeof new2value) // but it does convert the string to number
// in boolean 
// empty string = false
// filled string = true
// 1 = true
// 0 = false

// ------------operations------------
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%3);
// console.log(2/3);

// console.log("1"+3+4); //if the initial part is string , all after this will be considered as string
// console.log(3+2+"1"); //since the string part is after integer , the integer operation will happen first 

//postfix
// let x=3
// const y=x++
// console.log(x);
// console.log(y);

//prefix
// let x=3
// const y=++x
// console.log(x);
// console.log(y);

