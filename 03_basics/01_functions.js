

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result=number1+number2
    // return result
       return number1+number2 
}
const result=addTwoNumbers(3, 4)
// console.log("Result: ", result);

function loginUserMessage(username="sam") {
    if (!username){
        //console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sarthak"));
//console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1) {
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"Raj",
    prices:199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} ad price is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondArray(getArray) {
    return getArray[1]
}
// console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([200,400,500,1000]));


