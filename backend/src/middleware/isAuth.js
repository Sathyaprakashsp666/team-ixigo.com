const jwt = require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
  const token = req.get('Authorization').split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'topsecret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if(!decodedToken){
      const error=new Error("Not Authenticated")
      err.statusCode=401
      throw error
  }
  req.userId=decodedToken.userId
  next()
};
