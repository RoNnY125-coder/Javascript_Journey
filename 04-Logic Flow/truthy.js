// const userEmail="ronny@hehe.ai"
// if (userEmail){
//     console.log("User has Email")
// } else {
//     console.log("Don't Have email")
// }

//falsy values
// false , 0 ,-0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0" , 'false', [], {}, function(){}

 const emptyObj={}
 if (Object.keys(emptyObj).length===0){
    console.log("Object is empty");
 }