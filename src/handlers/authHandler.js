import jwt from 'jsonwebtoken';
import User from './../models/user';
import config from './../models/config';

export const authenticate = (req, res) => {
  User.findOne({
    email:req.body.email
  }, (err, user) => {
    if(err) throw err;
    if(!user){
      res.json({
        success:false,
        message:'Authentication failed. User not found.'
      });
    } else if(user){
      //TODO refactor this with async - await
      user.comparePassword(req.body.password, (err, isMatch) => {
        if(err){
          res.json({
            success:false,
            message:err
          });
        }
        if(!isMatch){
          res.json({
            success:false,
            message:'Authentication failed. Wrong password.'
          });
        }else{
          // if user is found and password is right
          // create a token with only our given payload
          const payload = {
            data:user.email
          };

          const token = jwt.sign(payload, config.secret, {
            expiresIn: '24h' //expires in 24 hrs
          });

          // return the info including token as JSON
          res.json({
            success:true,
            message:'Authenticated.',
            token
          });
        }
      });
    }
  });
};