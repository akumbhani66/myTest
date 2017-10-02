var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  usernmae: String,
  image: String,
  company_name: String,
  company_contact: String,
  company_add: String,
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');