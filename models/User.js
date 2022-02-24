const mongoose=require("mongoose");
const {Schema} =mongoose;
// creation de model
const UserSchema=new Schema({
    name:
    {
        type:String,
        required:true,
    },
    lastName:String,
    email:
    {
        type:String,
        required:true,
    },
    phone:Number,
    adresse:String,
});

// create model in DB
// notre modele appelé : User(just one User) et avec une squelette UserSchema
// aprés mongoose il va créer une collection aux plurielle >Users>User
//notre modele est appeler "User" 
module.exports=User=mongoose.model("User",UserSchema);