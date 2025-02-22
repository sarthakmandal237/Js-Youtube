const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails: function() {
        //console.log("Got user details");
        //console.log(`Username:${this.username}`);
        console.log(this);
        
        
        
    }
}
//console.log(user.username);

function User(username, loginCount, isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    this.greetings=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne=new User("hitesh",12,true)
const userTwo=new User("Chai aur code",11,false)
console.log(userOne.constructor);
//console.log(userTwo);



