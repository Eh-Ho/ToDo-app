const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema ({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password :{type : String, required : true},
    role : {type : String, required : true, enum : ['admin', 'user'], default : 'user'},
},{timestamps : true});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    try {
      const saltRounds = process.env.BCRYPT_SALT;
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
      next();
    } catch (err) {
      next(err);
    }
  });
  
  userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };
  
const User = mongoose.model('User', userSchema);

module.exports = User;