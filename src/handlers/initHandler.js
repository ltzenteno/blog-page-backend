import User from '../models/user';

export const createDefaultUser = (req, res) => {
  const user = new User({
    email:'pepito@mail.com',
    password:'hola'
  });

  user.save(err => {
    if(err) throw err;
    console.log('user saved successfully');
    res.json({success:true})
  });
};