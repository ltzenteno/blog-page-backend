import jwt from 'jsonwebtoken';
import config from './../../models/config';

export default (req, res, next) => {
  // check header, or url params or post params for token
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if(token){
    jwt.verify(token, config.secret, (err, decoded) => {
      if(err){
        return res.status(401).send({
          success:false,
          message:'Failed to authenticate token.'
        });
      }else{
        req.decoded = decoded;
        next();
      }
    })
  }else{
    return res.status(403).send({
      success:false,
      message:'No token provided.'
    });
  }
};