const express = require('express');
const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}!`)
);
