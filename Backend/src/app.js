const express = require('express');
const aiRoute = require('./routes/ai.routes');


const app = express();


app.use('/', aiRoutes);


app.get('/', (res, req) => {
    res.send("Hello World");
})


module.exports = app;