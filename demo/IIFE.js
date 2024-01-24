//Immediately Invoked Function Expression

(x=function chai(){
    console.log("Hi,I am IIFE");
})();

((username)=>{
    //Named IIFE
    console.log(`Hi,I am IIFE, my name is ${username}`);
})("Harsh");


(()=>{
    console.log("I am another IIFE");
})()

const score=100
console.log(`hi ${this.score}`);