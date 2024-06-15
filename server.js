const express = require('express');
const mongodb = require('./data/database.js');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if(err) {
        console.log(`server.js line 13: ${err}`)
    } else {
        app.listen(port, () => {console.log(`Database is listening. Node is running on port ${port}`)});
    }
})