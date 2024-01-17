var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var userDetails = new userModel({
    name: 'Vikas',
    email: 'vikas@gmail.com',
    password: 'vikas@123',
  });

  userDetails.save()
    .then(savedUser => {
      res.render('index', { title: 'user data' });
    })
    .catch(err => {
      throw err; // Handle the error appropriately in your application
    });
});


router.post('/register', function(req, res, next) {

  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,

  });

  userDetails.save().then(resResult=>{
    res.status(201).json({
        msg:"Inserted Successfully",
        results:resResult
    });
})
.catch(err=>{
    res.json(err);
});


});


module.exports = router;
