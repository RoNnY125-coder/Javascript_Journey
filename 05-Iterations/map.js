// const numbers=[1,2,3,3,4,5,5,3,5]
// const newnums=numbers.map((num)=>num+10)
// console.log(newnums);

const numbers=[1,2,3,3,4,5,5,3,5]
const newnums=numbers.map((num)=>num+10).map((num)=>num+1).filter((num)=>num>=15) //this is called chaining 
console.log(newnums); 