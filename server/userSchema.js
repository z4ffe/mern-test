const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   email: {
	  type: String,
	  required: true,
	  trim: true,
	  unique: true
   },
   nickname: {
	  type: String,
	  required: true,
	  unique: true,
	  trim: true,
	  minlength: 4
   },
   password: {
	  type: String,
	  minlength: 6,
	  required: true
   },
   country: String,
   year: String,
   club: {
	  type: String,
	  required: true
   }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}
