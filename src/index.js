//Serve static conent

const express = require('express');
const app = express();

const personRoute = require('./routes/person');
const customerRoute = require('./routes/customer');
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');



//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// DB Config
const db = require('../config/keys.js').mongoURI

// Connect to MongoDB
mongoose
  .connect(db,{
useUnifiedTopology: true,
useNewUrlParser: true,
// useFindAndModify: false,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

// app.use((req, res, next) => {
//   console.log(`${new Date().toString()} => ${req.originalUrl}`)
//   // res.send('')
//   next()
// });


app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

//Handler for 404 requests
app.use((req, res, next) => {
  res.status(404).send('We think you are lost')
});

//Handler for error 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, '../public/500.html'));
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on ${PORT}`)) // Will run the files
