//Define 10 students JSON
//Store it in an Array
//Find the female students
//Find the students who are following IT course
//Find the max and average GPA among the students



let students = [
    { id: 1, name: "Alice", gender: "Female", course: "IT", gpa: 3.8 },
    { id: 2, name: "Bob", gender: "Male", course: "Engineering", gpa: 3.2 },
    { id: 3, name: "Charlie", gender: "Male", course: "IT", gpa: 3.6 },
    { id: 4, name: "Diana", gender: "Female", course: "Business", gpa: 3.4 },
    { id: 5, name: "Eva", gender: "Female", course: "IT", gpa: 3.9 },
    { id: 6, name: "Frank", gender: "Male", course: "Mathematics", gpa: 3.1 },
    { id: 7, name: "Grace", gender: "Female", course: "IT", gpa: 3.7 },
    { id: 8, name: "Hank", gender: "Male", course: "Science", gpa: 3.3 },
    { id: 9, name: "Ivy", gender: "Female", course: "Engineering", gpa: 3.5 },
    { id: 10, name: "Jack", gender: "Male", course: "IT", gpa: 3.8 }
];

// Find female students
let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

// Find students following IT course
let itStudents = students.filter(student => student.course === "IT");
console.log("Students following IT course:", itStudents);

// Find max and average GPA
let gpas = students.map(student => student.gpa);
let maxGpa = Math.max(...gpas);
let avgGpa = gpas.reduce((sum, gpa) => sum + gpa, 0) / students.length;

console.log("Max GPA:", maxGpa);
console.log("Average GPA:", avgGpa.toFixed(2));
