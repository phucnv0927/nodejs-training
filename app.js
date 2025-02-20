const path = require('path');
const rootDir = require('./utils/path');
const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');
// const sequelize = require('./utils/database');
// const connectDb = require('./utils/database-nosql');
const connectMongoose = require('./utils/database-mongoose');

const express = require('express');
const app = express();

// parse json request body
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
})
// sequelize
//   // .sync()
//   .sync({force: true})
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch (err => {
//     console.log(err);
//   });

const startServer = async () => {
  try {
    await connectMongoose();
    app.listen(3000);

  } catch (error) {
    console.error(error);
  }
};

startServer();