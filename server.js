const express = require('express');
const app = express();



const PORT = process.env.port || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/api', htmlRoutes);

app.listen(PORT, () =>
  console.log(`This is the current port number http://localhost:${PORT}!`)
);





