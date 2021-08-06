const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error('Validations Failed.');
    err.statusCode = 422;
    err.data = errors.array();
    throw err;
  }
  const email = req.body.email,
    name = req.body.name,
    password = req.body.password;
  bcrypt
    .hash(password, 15)
    .then((hashedPwd) => {
      const user = new User({
        email: email,
        password: hashedPwd,
        name: name,
      });
      return user.save();
      //   res.status(202).json({SignUpp Successful})
    })
    .then((result) => {
      res
        .status(201)
        .json({ message: 'Signup successful', userID: result._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email,
    password = req.body.password;
  let storedUser;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const err = new Error('No such Email exists.');
        err.statusCode = 401;
        throw err;
      }
      storedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isCorrect) => {
      if (!isCorrect) {
        const err = new Error('Wrong password');
        err.statusCode = 401;
        throw err;
      }
      const token = jwt.sign(
        {
          email: storedUser.email,
          userID: storedUser._id.toString(),
        },
        'topsecret',
        { expiresIn: '1h' }
      );
      res.status(200).json({token:token, user:{userID:storedUser._id.toString(),email:storedUser.email,name:storedUser.name}})
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
