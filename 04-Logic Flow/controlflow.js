// basic structure 
const score = 500
// if (score>300){
//     const power="Super Strength"
//     console.log(`User Power: ${power}`);

// }

// short hand notation
const bal = 10000
// if(bal>=1000) console.log("Test"); // this is called implicit scope 

// nesting

// if (bal<1000){
//     console.log("Low balance")
// } else if (bal<5000){
//     console.log("MID balance")
// } else if (bal<10000){
//     console.log("Exact balance")
// }else {
//     console.log("High Balance")
// }

const userLoggedIn=true
const debitcard=true
const googleloggedin=true
const emailloggedin = true

if(userLoggedIn && debitcard){         //checks both condition true
    console.log("Access granted");
} 

if(googleloggedin || emailloggedin){    //Multiple OR condition
    console.log("User Logged In");
}

//Nullish Coalescing Operation (??)
// for assigning two values , used when the browser gives two outputs 
let val1;
// val1=5 ?? 10
// val1 = null ?? 10
val1=undefined??10
console.log(val1)

//ternary operator
const coffee=200
coffee>=80 ? console.log("More than 80"):console.log("Less than 80")