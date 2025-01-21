// function is a first calss citizien

//callback function
//higher order function
//inbuilt hof- map,reduce,filter,sort.

// function a(){
//     console.log("i am a function")
// }

// function b(x){
//     x()
// }

// b(a);


// Example 1
// function x(){
//     return function y(){
//         console.log("i am function y")
//     }
// }

// const xResult=x();
// xResult();

// x()() //Another way


//callback functions : which is passed as argument to another function.
//hofs accepts another function as a parameter and can return another function from its body both to above two conditions.

const skills = ["HTML","CSS","JS","React"]
// const n = skills.length;

// for (let i = 0; i < n; i++) {
//     console.log("I Know", skills[i]);
// }

//another way

const result=skills.map(x)
function x(element, index){
    console.log("element is",element);
    console.log("index is",index)
    return "react"
}

console.log(result)

 //Another way

//student1_details.filter  //Try this 