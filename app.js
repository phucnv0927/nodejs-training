const path = require('path');
const rootDir = require('./utils/path');
const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');
const sequelize = require('./utils/database');
// require('./models')
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
  res.status(404).sendFile(path.join(rootDir, 'views', 'error', '404.html'));
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

sequelize
  // .sync()
  .sync({force: true})
  .then(result => {
    app.listen(3000);
  })
  .catch (err => {
    console.log(err);
  });

