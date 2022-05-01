const express = require("express");
const Quiz = require("../model/quizSchema");
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

const router = express.Router();


router.get("/getquiz",async (req,res)=>{
    
    try{ 
        const quizdata =await Quiz.find({})
         res.status(201).json({
             quizdata
         })
    }
    catch(err){
        res.send(err)
    }
 
})
router.post("/postquiz", async (req, res) => {
    const {
      id,
      topic,
      subject,
      Quizcontent 
      
  
    } = req.body;
  
    if (
      (!id|| !topic|| !subject||   !Quizcontent  )
    ) {
      return res.status(422).json({
        error: "something missing",
      });
    }
  
    try {
      let QuizExist = await Quiz.findOne({ id: id });
      if (QuizExist) {
          return res.status(422).json({
              error: 'ID is not unique exist'
          })
      } 
  
      const quiz = new Quiz({  
          id,
          topic,
          subject,
           Quizcontent 
           
       })
      await quiz.save() 
      res.status(201).json({ message: 'Notes added successfully',
      
  })
    } catch (err) {
      return res.status(400).json({
        error: "error",
      });
    }
  });
  
  module.exports = router