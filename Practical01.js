const express = require('express');
const app = express();
const port = 3001;

// Define student data
let students = [
    {reg_No: '2233', Name: 'Ama', Age: 22, Course: 'IT', gender: 'Female'},
    {reg_No: '2222', Name: 'Sahan', Age: 22, Course: 'Science', gender: 'Male'},
    {reg_No: '2244', Name: 'Nethmi', Age: 24, Course: 'Science', gender: 'Female'},
    {reg_No: '2255', Name: 'Yash', Age: 21, Course: 'IT', gender: 'Male'},
    {reg_No: '2266', Name: 'Anudi', Age: 23, Course: 'IT', gender: 'Female'},
    {reg_No: '2277', Name: 'Methma', Age: 24, Course: 'Engineering', gender: 'Male'},
];

// Retrieve all students
app.get('/stu', (req, res) => {
    res.send(students);
});

// Greeting endpoint
app.get('/', (req, res) => {
    res.send('Hello Express JS');
});

// Custom message endpoint
app.get('/msg', (req, res) => {
    res.send('Hello IT students');
});

// Search by ID
app.get('/stu/:id', (req, res) => {
    const id = req.params.id;
    const result = students.find(student => student.reg_No == id);
    if (result) {
        res.send(result);
    } else {
        res.status(404).send('Student not found');
    }
});

// Search by gender
app.get('/stu/gender/:gen', (req, res) => {
    const gen = req.params.gen;
    const result = students.filter(student => student.gender == gen);
    res.send(result);
});

// Search by name
app.get('/stu/Name/:name', (req, res) => {
    const name = req.params.name;
    const result = students.filter(student => student.Name == name);
    res.send(result);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});