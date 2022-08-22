const { Schema, model } = require("mongoose");

































UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  //Create the user model using the UserSchema
  const User = model("User", UserSchema);
  
  module.exports = User;