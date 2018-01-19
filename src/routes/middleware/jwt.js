import jwt from 'jsonwebtoken';

/**
 * Defines JWT middleware to be used in protected routes
 * @param req
 * @param res
 * @param next
 * @returns {void | *}
 */
export default (req, res, next) => {
  // check header, or url params or post params for token
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if(token){
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
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