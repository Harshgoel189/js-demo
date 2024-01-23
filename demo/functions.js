//default value
function addTwoNumbers(number1=0,number2=0){
    console.log(number1+number2);
}
// addTwoNumbers(6,7)

function greetMessage(username){
    if(username === undefined){
        return "Enter Valid Username!!"
    }
    return `${username} just logged in`
}

// console.log(greetMessage())


//****************************Rest Operator in functions--->(...num1)

function addManyNumbers(...num){
    return num
}

// console.log(addManyNumbers(1,23,34,55));
// console.log(addManyNumbers(23,34));



//*******************Passing objects in functions***************** */

const obj1={
    name:"harsh",
    age:22
}

function handleObjects(anyobject){
    console.log(`Hello I am ${anyobject.name} and I am ${anyobject.age} years old!!`);
}

// handleObjects(obj1)

// handleObjects({
//     name:"shivansh",
//     age:19
// })
const arr1=[100,230,45,35,89,78]

function valueOfArray(arr){
    return arr[0]
}

console.log(valueOfArray(arr1));
const ans= valueOfArray([19,28,89,13,23])
console.log(ans);