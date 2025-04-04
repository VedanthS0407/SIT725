const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// POST request to perform basic arithmetic operations
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number' || !operation) {
        return res.status(400).json({ error: 'Invalid input. Ensure num1 and num2 are numbers.' });
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
