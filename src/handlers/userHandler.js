import User from './../models/user';

export const createUser = (req, res) => {
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

export const fetchUsers = (req, res) => {
  User.find({}, (err, users) => {
    const resultList = users.map(item => {
      return {
        id:item._id,
        email:item.email
      };
    });
    res.json(resultList);
  });
};