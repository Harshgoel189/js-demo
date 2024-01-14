"use strict";//treat all js code into newer version

// alert("Hello"); //we are using nodejs,not browser

let age=22
let myname="Harsh"

let isLogIn=false
let state;//undefined

console.log(typeof age)
console.log(typeof myname)
console.log(typeof undefined)
console.log(typeof null)

let num="23.12f"
let num2=Number(num)
console.log(typeof num2)//shows type is number
console.log(num2)//if number is invalid then shows NaN

let x=100
let y=String(x)
console.log(typeof x)

/*
"33" => 33
"33abc" => NaN
conversion types:
        let num=Number(x)
        let str=String(x)
        let isBool=Boolean(x)
*/