// express web server
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log(`Server running on port ${process.env.port || port}`);