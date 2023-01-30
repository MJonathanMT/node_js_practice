const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');


mongoose.set('strictQuery', true);

dotenv.config();
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

const postRoutes = require('./routes/post');
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());

app.use("/", postRoutes);

const port = "8080";
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});