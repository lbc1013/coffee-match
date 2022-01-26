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


//insert data into db
// Coffee.create({
//   resultId: 3,
//   imgUrl: "https://i.etsystatic.com/31988385/r/il/c3a0ea/3385615255/il_1588xN.3385615255_3ks7.jpg",
//   country: 'Ethiopia',
//   type: 'Arabica',
//   description:
//   'Ethiopian beans as a whole are known for their winey quality and bright mouthfeels.<br></br>They typically have a light to medium body, higher acidity, and complex flavor notes. Most of the coffees from Ethiopia are naturally processed, which means that they are dried with the cherry fruit still attached to the coffee bean. <br></br>This style of processing gives the coffee fruity or winey tones and bright acidity.<br></br>Wet processing is a newer method, and the fruit is removed. The final cups are clean, floral, and complex.',
//   shoppingUrl: 'https://www.etsy.com/listing/1087023727/morning-scrum-ethiopia-arabica-coffee?gpla=1&gao=1&'
// }, (err, result) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('well saved');
//   }
// });

