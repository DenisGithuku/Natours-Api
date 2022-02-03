const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: `${__dirname}/../config.env` });
const Tours = require(`${__dirname}/../model/tourModel`);

const db = process.env.DATABASE_LOCAL;

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log('DB connection established');
  })
  .catch((err) => {
    console.log(err);
  });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/toursSimple.json`, 'utf-8')
);

//IMPORT DEV DATA
const importData = async () => {
  try {
    await Tours.create(tours);
    console.log('Tours uploaded successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETING DB TOURS
const deleteDbData = async () => {
  try {
    await Tours.deleteMany();
    console.log('Deleted tours succcessfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteDbData();
}
