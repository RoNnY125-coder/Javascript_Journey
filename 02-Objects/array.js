// ------------array----------------
copying array always creates shallow copy (have same underlying value) rather than deep copies (different values)
let myarr=[33,42,2,244,4]
console.log(myarr[0]);

const marr=new Array(3,42,42,4,6)
console.log(marr);

marr.push(5) // append
console.log(marr);

marr.pop() // removes last element
console.log(marr);

console.log(marr.includes(42)); // confirms if the given element is

const myn1=new Array(4,13,6,8,2)
const myn2=new Array(7,5,2,4,6)
console.log(myn1.slice(1,3)); // does not include 3rd indexing
console.log(myn2.splice(1,3)); // does include 3rd indexing

//-----------------------------------------------------------------------------------------------

const mhero=new Array("Ronny","Laghu","Hemanto","Choksh")
const dchero=new Array("Chilu","ShashankDawg","Daak","Krishna")

console.log(mhero.length); //for lenght of array

mhero[0]="chigga";
console.log(mhero); //updating the elements

mhero.push("DB");
console.log(mhero); // add at the end

mhero.unshift("yo");
console.log(mhero); // add at beginning 

dchero.pop();
console.log(dchero); // remove from end

dchero.shift();
console.log(dchero); // remove from beginning

console.log(mhero.indexOf("Ronny")); // returns the position of the value in array

console.log(mhero.includes("Ronny"));  // checks the existence of the value

let r=mhero.concat(dchero);
console.log(r);                 //merges both the array\

console.log(mhero.join(",")); // converts array to string
