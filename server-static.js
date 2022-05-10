const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const port = 8520;

const domain = 'http://localhost';

app.use(express.static('./dist'));

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on port ${port}, ${domain}:${port}`);
});
