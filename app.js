const express = require('express');
const moongoose = require('mongoose');
const route = require('./routes');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');

// Load biến môi trường
require('dotenv').config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 8080;

// Kết nối CSDL
const database_link = process.env.MONGODB_LINK;
console.log(database_link);

// Midleware
app.use(logger);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

moongoose
  .connect(database_link)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

route(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
