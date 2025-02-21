const {Schema, model}=require("mongoose")

const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true,
      },

  }, {versionKey:false, timestamps: true });

  const userModel= model('User', userSchema);
  module.exports=userModel
