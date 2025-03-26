
const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// GET request to add two numbers
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameters num1 and num2' });
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    res.json({ result: sum });
});

// POST request to perform basic arithmetic operations
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    if (!num1 || !num2 || !operation) {
        return res.status(400).json({ error: 'Missing parameters num1, num2, or operation' });
    }
    
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

});















































































// var express = require("express")
// var path = require("path")
// var app = express()
// var port = process.env.port || 3031;

// app.use(express.static(path.join(__dirname,'public')));
// let quotes=[
//     "Hello"
// ];



// app.listen(port, ()=>{
//     console.log("App listening to:"+ port)
// })

// // app.get('/', (req,res)=> {
// //     res.send("Hello");
// // })
