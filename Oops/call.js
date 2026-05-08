function Setusername(username){
    // Complex DB calls
    this.username=username
}

function createUser (username,email,password){
    Setusername.call(this,username) //calls after using the call - holds reference only
    this.email=email
    this.password=password
}

const chai = new createUser("Ronny","job@job1","123")
console.log(chai);