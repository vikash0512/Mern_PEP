const student1_details = [
    "Vikash",
    "Jalandhar",
    21,
    ["HTML","CSS","JS"]
]

console.log("Student 1 Details" ,student1_details);

// const student2_details=student1_details;

// student2_details[0]="Pradeep";
// student2_details[1]="Hardoi";
// student2_details[3].push="React";

// console.log("student 2 details" ,student2_details)

// console.log("Student 1 Details" ,student1_details);

// for non-primitive data type we have to copy using deep copy. use json.stringfy and json.parse.

const student3_details=JSON.stringify(student1_details);
console.log(student3_details)
const student4_details=JSON.parse(student3_details);

const student5_details=JSON.parse(JSON.stringify(student1_details));  // Another way for deep copy.

student4_details[0]="Pradeep";
student4_details[1]="Hardoi";
student4_details[3].push="React";

console.log("student 4 details", student4_details)
console.log("Student 1 Details" ,student1_details);

// We can copy and change the value of const only in non-premitive data type but it cant be changed in premitive data type.





