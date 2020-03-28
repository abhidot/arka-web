var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema =mongoose.Schema({
    username : String,
    email    : String,
    password : String,
    admin    : false
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);