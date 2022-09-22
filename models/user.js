const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
    
      },
      email: {
        type: String,
        required: true,
        unique:true,
        trim:true,
        
      },
      thoughts: {
        type: Schema.Types.ObjectId,
        ref:'Thoughts'
      },
      friends: {
        type: Schema.Types.ObjectId,
        ref:'User'
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  const User = model('User', userSchema)
  module.exports = User;
  