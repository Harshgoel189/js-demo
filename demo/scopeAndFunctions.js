if(true){
    let a=100
    const b=250
    var c=101
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    console.log("one");
    two()
    function two(){
        console.log("two");
        // three()
        function three(){
            console.log("three");
        }
    }
}
one()
// two()
// three()

function addOne(num){
    return num+1
}
addOne(7)

const addTwo = function(num){
    console.log(num+2);
}
addTwo(8);