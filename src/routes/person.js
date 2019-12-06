let express = require('express');
let router = express.Router();


// QueryString => query property on the request object
// localhost:3000/person?name=johathan&age=28
//
router.get('/person', (req, res) => {
  if(req.query.name) {
    res.send(`You have requested a name: ${req.query.name}`)
  } else {
    res.send("Person requested")
  }
})

//Params property on the request object
// localhost:3000/person/john
router.get('/person/:name', (req, res) => {
  res.send(`You have requested a name: ${req.params.name}`)
})

router.get('/error', (req, res) => {
  throw new Error(' This is a forced Error');
})


module.exports = router;
