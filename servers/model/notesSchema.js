
const mongoose =require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const NotesSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    } 
    ,
    about:{
        type:String,
        required:true
    },
    whatyoulearn:{
        type:Array,
        required:true,
        default:[]
    },
    coursecontent:{
        type:Array,
        required:true,
        default:[]
    },
    noteslink:{ 
        type:String,
        required:true
    }
})

// userSchema.pre('save',async function(next){
//      if(this.isModified('password')){
//         this.password =await bcrypt.hash(this.password,10)
//         this.cpassword =await bcrypt.hash(this.cpassword,10)

//     }
//      next();
// });

// we are genrating toke 

// userSchema.methods.generateAuthToken = async function(){
//     try{
//         let token = jwt.sign({_id:this._id})
//     }
//     catch{
// console.log(err);
//     }

// }

const Notes = mongoose.model('NOTESDATA',NotesSchema);

module.exports= Notes;