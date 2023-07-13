const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');



const PORT = process.env.port || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
  console.log(`This is the current port number ${PORT}!`)
);





