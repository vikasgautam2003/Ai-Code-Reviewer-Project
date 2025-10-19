const express = require('express');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(express.json());

app.use('/', aiRoutes);


app.get('/', (res, req) => {
    res.send("Hello World");
})


module.exports = app;