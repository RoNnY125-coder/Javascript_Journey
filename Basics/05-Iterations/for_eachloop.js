//for each loop is very important 

//normal function
// const code=['js','cpp','rust','ruby','ptyhon']
// code.forEach( function (item){
//     console.log(item);
// } 

//arrow function
// code.forEach( (item) => {
//     console.log(item);
// })

//we can also declare a funtion
// function printME(item) {
//     console.log(item);
// }

// code.forEach(printME)

// code.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


//very common operation
const coder = [
    {
        lang:"Javascript",
        langfile:"JS"
    },
    {
        lang:"Java",
        langfile:"java"
    },
    {
        lang:"Python",
        langfile:"py"
    }
]

coder.forEach((item)=>{
    console.log(item.lang);
    console.log(item.langfile);

})

const code=['js','cpp','rust','ruby','python']
const value=code.forEach((item)=>{
    console.log(item);
    return item
    
})
console.log(value); // this part generates undefined