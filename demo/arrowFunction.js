const user={
    username:"Harsh Goel",
    age:22,
    welcomeMessage : function(){
        console.log(`Hello ${this.username},Welcome to India!!`);
        // console.log(this);
    }
}
user.username="Shivansh"
// user.welcomeMessage();
// console.log(this);


// function chai(){
//     let username="Harsh"
//     console.log(this.username);//prints undefined because `this` refers in objects
// }
// chai()


// const chai=function(){
//     console.log(this);
// }
// chai()


/********************This is arrow function*********************** */

// const chai=()=>{
//     console.log(this);
// }
// chai()

const chai=(num1,num2)=>{
    return num1 + num2
}
console.log(chai(3,4));

//or
const coffee=(num1,num2)=>(num1+num2)
console.log(coffee(8,3));

//How to return an object using arrow function

const milk= ()=>({username:"sam",age:34})
console.log(milk());