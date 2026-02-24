// scope basically means from where to where 

let a = 100 
// const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);
// var is not used and this is the reason

if (true){
    let a = 10 
    const b = 20
    var c = 30
    console.log(a)
}

// console.log(a);
// console.log(b); // this both will give error

// console.log(c); // but this wont give error because it doesnt have any block scope or global scope

// the global scope only prints the global value
// and block scope prints block value (loops and conditionals)

// --------------------------------------------------------------------------------


// function one(){
//     const username="Ronny"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two()
// }
// one() // nothing will print because of the block structure  

// in proffesional workspace a different scope is made just to call the functions 

// if (true){
//     const username = "Ronny"
//     if(username==="Ronny"){
//         const website="youtube"
//         console.log(username+website);
//     }
//     console.log(website) // no scope oso
  
// }
// console.log(username); // no scope

// ----------interesting stuff--------------

// function addone(num){
//     return num+1
// }
// addone(3)

// const addtwo = fuction(nom) {return nom+2}
    

// addtwo(8)