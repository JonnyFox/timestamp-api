const express = require('express');
const datejs = require('datejs');
var app = express();

function isEmpty(obj){
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

app.get('/:value', (req, res) => {
    var query = req.params.value;
    var result = {
        unix: null,
        natural: null
    };
    var date = null;
    if (!isEmpty(query)) {
        if (isNaN(query)) {
            date = new Date(Date.parse(query));
        }
        else {
            date = new Date(+query*1000);
        }
        
        if(date && date.getTime() != 0){
            result.unix = date.getTime()/1000|0;
            result.natural = date.toString('MMMM d, yyyy');
        }
    }
    
    res.json(result);
});


app.listen(process.env.PORT, process.env.IP);
