// High Order Array Loops
//for of

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greeting="Hello Traveler , I have been expecting you!"
for (const greet of greeting) {
    if (greet==" "){
        console.log("Space detected")
        continue
    }
    console.log(`Each car is ${greet}`);
    
}

// Maps
const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('SP','Spain')
console.log(map);  // shows the no. of output and the key value pair
// //only unique values , no duplicacy , ordered pairs

for (const [key,value] of map) {
    console.log(key,'->',value);    
}

const game={
    'game1':'GOW',
    'game2':'MW'
} // objects are not iterable by for of loop

// ----------------------------------------------------------------------------------
const meraobj={
    js:'javascript',
    cpp:'C++',
    rb:'Ruby',
    py:'Python'
}

//for in loop

for (const key in meraobj) {
    console.log(key)

// }
// array also have keys , it is by default its indexing positon

const weopons = ['sword','knife','dagger','bazooka']
for (const key in weopons) {
    console.log(weopons[key]);
}



const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('SP','Spain')
for (const key in map) {
    console.log(map[key]);
}
//not iterable

