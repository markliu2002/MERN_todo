const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

// app.get('/', (req, res) => res.send('Loading..'));



app.use(cors());

app.use(bodyParser.json());

const todosRoute = require('./routes/todos');
app.use('/todos', todosRoute);

// app.use('/', () => {
  // console.log('The middleware function has been activated');
// });





mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true }, 
  () => {console.log('DATABASE CONNECTED!!!')
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log('LISTENING ON PORT: ' + PORT)
});