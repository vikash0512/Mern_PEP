console.log("Hello, World!");
var x = 5;
var y = 10;
var z = x + y;
console.log(z);

x="Hello";
console.log(x);
console.log(typeof x);
console.log(typeof y);

const v=["vikash","kumar",true,["pradeep","patel"]];
console.log(v , typeof v);
console.log(v[3][1]);

const rohit={
    name:"Rohit",
    age:21,
    isStudent:true,
    friends:["Vikash","Pradeep"]
}
console.log(rohit);

// var n=10;
// for(var i=0;i<n;i++){
//     console.log("i like you");
// }

const skills =["react","node","express","mongo"];
for(var i=0;i<skills.length;i++){
    console.log(skills[i]);
}

const n = 101;
let result = "";
for (var i = 1; i < n; i++) {
    result += i + " ";
}
console.log(result);
