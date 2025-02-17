// singleton

// object literals
// Object.create
const mySym=Symbol("key1")

const JsUser={
    name: "Sarthak",
    "full name": "Sarthak Mandal",
    [mySym]:"mykey1",
    age: 18,
    location:"jaipur",
    email:"abc@abc.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="gpt@abc.com"
//Object.freeze(JsUser)
JsUser.email="gpt@micro.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`);
    
}
console.log(JsUser.greetingTwo());

