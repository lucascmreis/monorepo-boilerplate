/* eslint-disable no-console */
const express = require('express');

const app = express();
app.get('/', (req, res) => {

  res.json({message: 'Success '});
});

module.exports = app;
