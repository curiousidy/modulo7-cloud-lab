const express = require('express');
const path = require('path');

const app = express();
const staticsPath = path.resolve(__dirname, './public');

app.use('/', express.static(staticsPath));

const port = +process.env.PORT || 8081;
console.log(port);

app.listen(port, () => {
  console.log(`App is running on PORT:${port}`);
});