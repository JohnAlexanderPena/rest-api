const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');

//Create new Customer
//POST to DB
const Customer = require('../models/Customer')

router.post('/customer', (req, res) => {
    if(!req.body) {
      return res.status(400).send('Request Body is missing')
    }
    // const user = {
    //   name: 'first name last name',
    //   email: 'email@gmail.com'
    // }
    const model = new Customer({
      name: req.body.name,
      email: req.body.email
    })

    model.save()
      .then(doc => {
        if(!doc || doc.length === 0) {
          return res.status(500).send(doc)
        }

        res.status(201).send(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
})


module.exports = router;
