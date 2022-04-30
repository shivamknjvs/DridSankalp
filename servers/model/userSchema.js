
const mongoose =require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
})

userSchema.pre('save',async function(next){
     if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,10)
        this.cpassword =await bcrypt.hash(this.cpassword,10)

    }
     next();
});

// we are genrating toke 

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id})
    }
    catch{
        console.log(err);
    }

}

const User = mongoose.model('USERLOGIN',userSchema);

module.exports= User;