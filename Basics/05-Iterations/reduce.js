const num=[1,2,3]
const total=num.reduce(function(acc,curval){
    console.log(`acc: ${acc} and curval: ${curval}`)
    return acc+curval
},0)

console.log(total);

// const total=num.reduce((acc,curval)=>acc+curval,0)
// console.log(total);

const cart=[
    {
        item:"JS course",
        price: 2299
    },
    {
        item:"C++ course",
        price: 2499
    },
    {
        item:"Java course",
        price: 2199
    }

]

const price=cart.reduce((acc,item)=>acc+item.price,0)
console.log(price);