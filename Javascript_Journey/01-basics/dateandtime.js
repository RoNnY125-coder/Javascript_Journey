// ------------dates--------
const mydate= new Date()
console.log(mydate.toDateString()); // stores date
console.log(mydate.toISOString()); // stores in iso 
console.log(mydate.toJSON()); // stores in json
console.log(mydate.toLocaleString()); // stores like we mention date in notebook
console.log(typeof mydate); // it is an object

let newdate= new Date (2026,1,14) // date in js starts with 0
let newdate= new Date ("01-15-2026") // if string input , month starts with 1
console.log(newdate.toDateString());

//----------Time----------
let mytime=Date.now()
console.log(mytime);
console.log(newdate.getTime()); // in milisecond
console.log(Math.floor(Date.now()/1000)); //convert into seconds

// use the "GET" commands to access the month or year aur whatever you want

//For more customization
newdate.toLocaleString('default',{
    weekday: "long"


})  //we can also customize more 
