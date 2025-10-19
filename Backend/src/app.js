const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/ai', aiRoutes);


app.get('/', (res, req) => {
    res.send("Hello World");
})


module.exports = app;