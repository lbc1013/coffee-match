const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect ('mongodb://localhost/coffee', (err) => {
  if (err) {
    throw (err);
  } else {
    console.log('The server is connected to db');
  }
})