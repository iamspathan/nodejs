const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sum endpoint
app.post('/sum', (req, res) => {
    const { firstNumber, secondNumber } = req.body;
    const sum = firstNumber + secondNumber;
    console.log(req.headers);
    res.json({ result: sum });
    
});

// Minus endpoint
app.post('/minus', (req, res) => {
    const { firstNumber, secondNumber } = req.body;
    const difference = firstNumber - secondNumber;
    res.json({ result: difference });
});

// Multiply endpoint
app.post('/multiply', (req, res) => {
    const { firstNumber, secondNumber } = req.body;
    const product = firstNumber * secondNumber;
    res.json({ result: product });
});

app.listen(port, () => {
    console.log(`Math API server listening at http://localhost:${port}`);
});
