const arr=["Hello","Harsh","Goel",8218,630422]
for (const val of arr) {
    // console.log(val);
}

for (const ch of "Harsh Goel"){
    // console.log(ch);
}


//************************* Map****************************/

const map=new Map();
map.set('1',"harsh");
map.set('2',"Shivansh");
map.set('3',"sunil");
map.set('49','Ashok');

// console.log(map);


/***********This is forOf loop********************* */
for(const itr of map){
    // console.log(itr[1]);
}

for(const [key,value] of map){
    // console.log(key,":",value);
}

/*--------------------Forof loop does not work on objects---------------------*/

/********************ForIn Loops*************************** */

const obj={
    name:"harsh",
    age:22,
    address:"Budhana"
}

for (const key in obj) {
    // console.log(`${key} of object is ${obj[key]}`);
}

const brr=[12,34,55,"harsh"]

for(const key in brr){
    // console.log(`${brr[key]}`);
}
/*---------------ForIn Loops does not work for map----------------*/


/* **********************ForEach Loops ********************/

const coding=["js","java","cpp","ruby","python"]

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val)
// })

coding.forEach( (val,index,arr)=>{
    // console.log(val,index,arr)
})

const myCoding=[
    {
        languageName:"Javascipt",
        fileName:"js"
    },
    {
        languageName:"Java",
        fileName:"java"
    },
    {
        languageName:"python",
        fileName:"py"
    }
]

myCoding.forEach( (item)=>{
    // console.log(item.fileName);
})

/*************************filter***************** */


const ans=coding.filter((val)=>(val.length > 3))
// console.log(ans);


/******************** map *************************/

const arr1=[1,2,3,4,5,6,7]
const nums=arr1.map((num)=>num+10)
console.log(nums);