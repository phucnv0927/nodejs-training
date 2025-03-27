const path = require('path');
const rootDir = require('./utils/path');
// const sequelize = require('./utils/database');
// const connectDb = require('./utils/database-nosql');
// const connectMongoose = require('./utils/database-mongoose');
const router = require('./router');
const db = require('./models');
const errorHandler = require('./utils/errorHandler');
const apolloServer = require('./graphql');
const limiter = require('./middlewares/limiter.middleware');
const cors = require('cors');

const express = require('express');
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));


// parse json request body
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(rootDir, 'public')));

app.use(limiter);
app.use(router);
// app.use('/graphql', graphql);
app.use(errorHandler);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
})

db.sequelize
  .authenticate()
  .then(() => {
    app.listen(3000);
    apolloServer.listen(4000);
  })
  .catch (err => {
    console.log(err);
  });

// const startServer = async () => {
//   try {
//     await connectMongoose();
//     app.listen(3000);

//   } catch (error) {
//     console.error(error);
//   }
// };

// startServer();