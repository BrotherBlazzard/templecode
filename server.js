// express web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World. Blazzard is here!');
});

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});