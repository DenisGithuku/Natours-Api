const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: `${__dirname}/config.env` });
const app = require(`${__dirname}/app`);
const port = process.env.PORT || 3000;

//local db
const local_db = process.env.DATABASE_LOCAL;
mongoose
  .connect(local_db, {
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('Connection successful\n');
  })
  .catch((err) => {
    console.log(err);
  });

//online db
/* const online_db = process.env.DATABASE.replace(
  '<password>',
  process.env.DB_PASSWORD
);
mongoose
  .connect(online_db, { useNewUrlParser: true })
  .then((con) => {
    console.log(con.connections);
    console.log('Connection established');
  })
  .catch((err) => {
    console.log(err);
    throw err;
  }); */

// //instance of the model (document)
// const forestTour = new Tour({
//   name: 'The Forest Hiker',
//   rating: 4.7,
//   price: 567,
// });

//saving forest tours document
// forestTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('Error 😏:', err);
//   });

//sea explorer tour
// const seaExplorer = new Tour({
//   name: 'The Sea Explorer',
//   price: 456,
// });

// seaExplorer
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('Error 😏:', err);
//   });

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
