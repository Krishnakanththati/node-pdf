const express = require('express');
const app = express();

const { pdfHelper } = require('./pdfHelper');

app.get('/api/endpoint', (req, res) => {
    res.send({ message: 'Hello, this is a GET API endpoint.' });
});
app.get('/invoice/download', pdfHelper.generatePdfReport);
app.use("/", (req, res) => {
    res.send({ message: "Hello From Express app" });
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});