import User from './../models/user';

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