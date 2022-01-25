const express = require('express');
const app = express();
const port = 3000;

app.use('/', (req, res) => {
});

app.listen(port , () => {
  console.log(`your app is listening at http://localhost:${port}`);
});