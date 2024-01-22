// const arr=[1,23,34,56,67,89]
// const arr2=['harsh','goel',123478,true]
// const arr3=new Array(12,34,56,78);

// const arr=[1,23,10,45,56,89,97]
// arr.push(99);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(101);
// console.log(arr);

// console.log("A " ,arr);
// console.log("B " ,arr.slice(1,4));//does not modify original array

// console.log("C ",arr);
// console.log("D ",arr.splice(1,4));//modifies original array and include ending range
// console.log(arr);
// console.log(typeof arr);


const arr=[12,34,56,89]
const arr2=["harsh","goel","shivansh"]
let arr3=["abcd",true]
// arr.push(arr2);//modifies original array
// console.log(arr);
// let arr4=arr.concat(arr2)
// console.log(arr3);
// console.log(arr2);
// console.log(arr);

//spread operator

const newarr=[...arr,...arr2,...arr3]
console.log(newarr);


const myarr=[1,2,[3,4],5,6,[7,8,[9,10,[11,12,[13,14]]]]]
console.log(myarr.flat(2));
console.log(myarr.flat(3));
console.log(myarr.flat(Infinity));


const myarr2=[1,2,3]
console.log(Array.isArray(myarr2));
console.log(Array.isArray("Harsh"));

console.log(Array.from("Harsh"));
console.log(Array.from({123 : "145",12:"hjh"}));

const score1=100
const score2=200
const score3=300

//Create an array of different variables
console.log(Array.of(score1,score2,score3));