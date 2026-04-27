// "THIS" keyword tells about current context
const jsuser = {
    name: "Ronny",
    age: 18,

    welcomemessage: function(){
        console.log(`${this.name},Welcome To our website`);  // here this keyword confirms the current scenario , also this does not makes it hardcode
        console.log(this); // this prints the current context  
    }
}

// jsuser.welcomemessage()
// jsuser.name="Ishu"
// jsuser.welcomemessage()
// console.log(this); // this shows empty because no current context globally

// ---------------Arrow Function------------------

// function one(){
//     let username="ronny"
//     console.log(this.username);
// }
// one() // "THIS" keyword does not work in functions 

// const tea = (num1,num2)=>{     // this is arrow function lmao
//     return num1+num2   // very complex mathematics lmao
// }

// console.log(tea(4,2)); 

//another method - implicit return (no parenthesis)
// const tea = (num1,num2)=>num1+num2  
// console.log(tea(4,2)); 

//in arrow function we dont need return keyword

//-------------------------------------------------------

// Immediately Invoked Function Expressions (IIFE)

(function yay(){
    console.log(`DB CONNECTED`);
})()
// global scope pollute functions, thats why we use IIFE