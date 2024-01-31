const numbers=[1,2,3,4,5,6,7]
let initialValue=0
// const ans=numbers.reduce(function(acc,currval){
//     return acc+currval
// },initialValue)

// const ans=numbers.reduce((acc,currval)=>(acc+currval),0)

const ans=numbers.reduce((acc,currval)=>acc+currval,initialValue)

// console.log(ans);


//example:Find totalPrice of course of shoppingCart

const courses=[
    {
        courseName:"Javascript",
        price:999
    },
    {
        courseName:"Mobile Dev",
        price:5999
    },
    {
        courseName:"C++",
        price:3999
    },
    {
        courseName:"Java",
        price:1999
    }
]

const totalPrice=courses.reduce((acc,currval)=>acc+currval.price,0)
console.log(totalPrice);