const nums=[1,2,4,5,6,7,8,9]
// const nnum = nums.filter((num)=>{
//     return num>5              // we have to return it because the scope is open and we have to return the value
// })
// console.log(nnum);


//doing it by using for each
const nnum=[]
nums.forEach((num)=>{
    if (num>5) {
        nnum.push(num)
    }
})
console.log(nnum);
