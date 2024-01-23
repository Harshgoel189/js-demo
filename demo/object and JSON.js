
let mysm1= Symbol("key1")

const obj1={
    name:"Harsh Goel",
    age: 22,
    email:"harshgoel@gmail.com",
    mob: "8218630422",
    college:"GEU",
    [mysm1]: "mykey2"
}

obj1.address="Budhana"//add new field

obj1.email="harsh@gmail.com"//change the value
// console.log(obj1[mysm1]);
// console.log(obj1["college"]);
// console.log(obj1.email);

// Object.freeze(obj1)//This will not allow to modify the object
// obj1.email="abc@email.com"//this will not change because object is freezed
// console.log(obj1.email);
// console.log(obj1);

// define function inside the object

obj1.greeting=function(){
    console.log(`Hello ${this.name}, congratulations!!`);
}
obj1.greetingTwo=function(){
    console.log(`Hello`);
}

// obj1.greeting();
// obj1.greetingTwo();

// console.log(obj1.greeting);


const obj3=new Object();
obj3.email="h1@gmail.com"
obj3.age=22
obj3.mob=821863
obj3.name={
    username:{
        firstName:"Harsh",
        lastName:"Goel"
    }
}

// console.log(obj3.name.username.firstName);
const object1={1:"a",2:"b"}
const object2={3:"c",4:"d"}
const object3={5:"e",6:"f"}

// const object4=Object.assign({},object1,object2,object3)
// const object4={object1,object2,object3}

//spread
const object4={...object1,...object2,...object3}
// console.log(object4);

const object5=[
    {
        id:1,
        name:"a"
    },
    {
        id:2,
        name:"b"
    },
    {
        id:3,
        name:"c"
    }
]

// console.log(object5[1].name);

// console.log(Object.keys(object1));
// console.log(Object.values(object1));
// console.log(Object.entries(object1));
// console.log(obj1.hasOwnProperty("college"));
// console.log(object5);



/****************Destructuring of objects******************************* */

const course={
    courseName:"javascript",
    price:999,
    courseInstructor:"harsh"
}

const {price}=course
// course.price //This will do the same thing.
console.log(price);

const {courseInstructor:x}=course
console.log(x);

// {
//     "name":"harsh",
//     "age":22,
//     "course":"Btech"
// }



//************Sample Json data from RandomUser Generator API ************/
// This can be more readable using JSON FORMATTER Site




// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }