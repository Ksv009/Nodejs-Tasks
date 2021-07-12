const mongoose = require("mongoose");

const employeeschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname must be provided'],
        minlength: [3, 'Minimum length of firstname must be 3 characters']
      },
      lastname: {
        type: String,
        required: [true, 'Lastname must be provided'],
        minlength: [3, 'Minimum length of lastname must be 3 characters'],
      },
      email: {
        type: String,
        unique: true,
        lowercase: true,
        required:  [true, 'Email must be provided']
      },
      password: {
        type: String,
        required:  [true, 'Password must be provided'],
      },
      deviceid: {
        type: String,
        default: ""
      },
      appid: {
        type:String,
        default: ""
      },
      referralid: { 
        type: String, 
        unique: true 
      },
      referralby: {
       type: String,
       default: null
      },
      accessToken: { 
        type: String,
      } 
});

module.exports = mongoose.model("employee", employeeschema);