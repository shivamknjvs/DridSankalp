
const User = require('../model/userSchema'); 
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')

const authenticate =  async (req,res,next)=>{
     
    try{
      const token =  req.cookies.jwtoken;
      console.log(token)
      const verifytoken = jwt.verify(token,process.env.SECRET_KEY) 
      const rootUser = await User.findOne({_id:verifytoken._id ,"tokens.token":token})
      if(!rootUser){ throw new Error('User not Found') }
      req.token=token;
      req.rootUser=rootUser;
      req.userId = rootUser._id;

      next();
    }
    catch (err){
        console.log('Unauthorized : No token provided');
        res.status(401).send('Unauthorized : No token provided');
    }
}
 

module.exports= authenticate