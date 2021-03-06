const express = require('express');
const app = express();

const path = require('path');

port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port);
console.log('listening on port: ' + port);