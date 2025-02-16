// #Primitive

// 7 types : String, Number, Boolean, null. undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id = Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

//const bigNumber=34567854367848594729n


// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros=["shaktiman", "naagraj", "doga"]
let myObj={
    name: "sarthak",
    age: 22,
}

const myFunction= function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non Primitive)

let myYoutubeName="RajFlimz"

let anothername=myYoutubeName
anothername= "ChaiAurCode"
console.log(myYoutubeName);
console.log(anothername);

let userOne={
    email:"abc@gmail.com",
    upi:"user@oksbi"
}
let userTwo=userOne

userTwo.email= "sarthak@google.com"
console.log(userOne);
console.log(userTwo);



