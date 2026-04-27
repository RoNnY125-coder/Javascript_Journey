// basic function structure
function myname () {
    console.log("Ronny")     //{} this is the scope of the function
}

// myname()

function add (n1,n2){
    console.log(n1+n2);
}
const result1 = add(1,2)
console.log("Result",result1) // the data is undefined even when it prints the output

function add (n1,n2){
    let result=n1+n2
    return result
    console.log("This wont print") //this will not execute because after return the function doesnt works
}

const result = add(1,2)
console.log("Result",result) // now the result is visible 

//creating a login page messgae using function
function loginusermessage(username){
    return `${username} just logged in`
}

console.log(loginusermessage("Ronny"))

// nothing is passed , undefined remains

//-----------------------------------------------------------------------

//Shopping cart problems
function calculatecartprice(...n1){
    return n1
}
console.log(calculatecartprice(200, 400,500,2000))

// now how do we pass object into a function
const user={
    username: "Ronny",
    price: 99
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject({
    username: "Ishu",
    price: 599
})