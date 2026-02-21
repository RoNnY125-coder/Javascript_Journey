// object is basically the collection of key value pair

// there are two terms :-

// literal - it is the direct value you write in code.
// constructor - It is a special function used to create and initialize objects.

// also if we declare by literal , simpleton will not be formed 
// but if constructor is used , simpleton will be formed

const jsuser = {
    name: "Ronny",
    age: 18,
    location: "Delhi",
    email: "raunaksh@gmail.com",
    isloggedin: false,
    lastloginday: ["Monday","Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
jsuser.greetingone=function(){
    console.log("Hello JS User"); 
}

jsuser.greetingtwo=function(){
    console.log(`Hello JS User,${this.name}`);    //string interpolation
}

console.log(jsuser.greetingone());
console.log(jsuser.greetingtwo());

// --------------------------------------------------------------------

const riotuser=new Object ()
riotuser.id=7755
riotuser.name="RoNnY"
riotuser.isloggedin=false


// console.log(riotuser);

const ouser ={
    email: "1234@gmail.com",
    fullname:{
        firstname: "Raunak",
        lastname: "Sharma"
    }

}

// console.log(ouser.fullname.firstname) // add dot to get into the object
const obj={1:"a",2:"b"}
const obj2={3:"A",4:"B"}
// const obj3 = {obj,obj2}  returns a nested output like in array
// const obj3=Object.assign(obj,obj2)  
// const obj3={...obj,...obj2} spread operator (more used)
console.log(obj3) 
