const express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('Hello world');
});

console.log(process.env.PORT);
console.log(process.env.IP);


app.listen(process.env.PORT, process.env.IP);