const colors = require('colors/safe');
const app = require('./src/app');

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(colors.yellow.bold(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
);
