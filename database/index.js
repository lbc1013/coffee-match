const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect ('mongodb://localhost/coffee', (err) => {
  if (err) {
    throw (err);
  } else {
    console.log('The server is connected to db');
  }
})

//schema create
const coffeeSchema = new Schema ({
  resultId: {
    type: Number,
    unique: true
  },
  imgUrl: String,
  country: String,
  type: String,
  description: String,
  shoppingUrl: String
});

//model cretae
const Coffee = mongoose.model('Coffee', coffeeSchema);

exports.getResultData = () => {
  return new Promise ((resolve, reject) => {
    Coffee.find ({}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}


Coffee.findOneAndUpdate({resultId: 4}, {description: 'A good brewed cup of Bugisu (or "Bugishu") coffee exhibits cupping notes similar to the desirably winey acidity of a fine East African coffee, with sweet chocolate flavor and rich texture. Generally speaking, the lower complexity and lighter lighter body of Ugandan coffees makes them generally less distinguished than the finer coffees of neighboring Zimbabwe, Tanzania, or Kenya.'}, (err, result) => {
  if(err) {
    console.log(err);
  } else {
    console.log('well updated');
  }
});

