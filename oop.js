const user = {
    username: "Ronny",
    logincount:10,
    signedin: true,

    getuserdetails: function() {
        // console.log("Got USer details from the database")
        // console.log(`Username: ${this.username}`);
        // console.log(this)
    }

}

// console.log(user.username)
// console.log(user.getuserdetails())
// console.log(this) //we get whole window as object

function yo (username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    
    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }
}

const user1= new  yo("ronny",12,true)
console.log(user1)