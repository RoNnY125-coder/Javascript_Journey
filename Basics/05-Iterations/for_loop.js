// for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element==5){
//         console.log("5 is the best no.")     //this execute 1st
//     }
//     console.log(element);
    
// }

// for (let i = 1; i <= 10 ; i++ )  {
//     //  console.log(`Outer loop: ${i}`);
//     for (let j = 1; j <=10 ; j++) {                  //nested loop
//     // console.log(`Inner loop: ${j}`);
//     console.log(i+'*'+j+'='+(i*j))                                            
//     }
// }

// let myarr=['Ronny','Ishu']
// for (let index = 0; index < myarr.length; index++) {
//     const element = myarr[index];
//     console.log(element)
// }

//keywords
//break and continue
// for (let index = 0; index <10; index++) {
//     if(index==5){
//         console.log("5 DETECTED")
//         break
//     }
//     console.log(`Value of i is ${index}`)
    
// }    //stops next iterations
for (let index = 0; index <10; index++) {
    if(index==5){
        console.log("5 DETECTED")
        continue
    }
    console.log(`Value of i is ${index}`)
    
}       // skips one iteration


