function multi5(num){
    return num*5
}

const i =multi5.power=2
console.log(multi5(5));

console.log(i)

function createuser(username,score){
    this.username=username  // current context
    this.score=score
}

createuser.prototype.increment =function(){
    this.score++  //whose score it will increase
    //jisne bhi bulaya , uska kaam krdo
}

createuser.prototype.me=function(){
    console.log(`score is ${this.score}`)
}

const ronny=new createuser("Ronnykills",50)
const ishu=createuser("Cookiemonstaaaa",10000)

ronny.me()