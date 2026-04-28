// it has three state
// pending - the initial state
// fulfilled - completely successful
// rejected - meaning the operation failed

const promise1= new Promise(function (resolve,reject){
    //Do and async task
    // DB calls , cryptography 
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve() //to connect resolve and then
    },1000)
})

// resolve has connection with then
promise1.then(function(){
    console.log("Promise Consumed");
})

//other way 
new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2:");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

// 3rd promise
const promise3=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"ronnyblast",email:"yoyo@gmail.com"})  //we can pass data too , eg object , arrat
    }, 1000);
})

promise3.then(function(user){
    console.log(user);
})

//promise 4
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"ishu",password:"ronny"})
        } else {
            reject("Error: Sab khatam")  //gives error
        } 
    },3000)
})

const username=promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{                          //chaining : used in DB management
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"))

//promise 5
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Jhabasciript",password:"ronny"})
        } else {
            reject("Error: bhorwa baigan")  
        } 
    },3000)
})
//async await
async function consumepromise5() {
    try{
        const response=await promise5
        console.log(response);
    } catch(error){
        console.log("error lmao")
    }

}
//cant handle errors 
consumepromise5()
