import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:String,
  password:String
});

// MonkeyPatching:
// The user's password is never saved in plain text.  Prior to saving the
// user model, we 'salt' and 'hash' the users password.  This is a one way
// procedure that modifies the password - the plain text password cannot be
// derived from the salted + hashed version. See 'comparePassword' to understand
// how this is used.
UserSchema.pre('save', function save(next) {
  const user = this;
  if(!user.isModified('password'))
    return next();

  bcrypt.genSalt(10, (err, salt) => {
    if(err)
      return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err)
        return next(err);

      user.password = hash;
      next();
    })
  })
});

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password,(err, isMatch) => {
    callback(err, isMatch);
  });
};

export default mongoose.model('user', UserSchema);