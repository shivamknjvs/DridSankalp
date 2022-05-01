const express = require("express");
const Notes = require("../model/notesSchema");
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

const router = express.Router();

router.get("/getnotes",async (req,res)=>{
    
    try{ 
        const notesdata =await Notes.find({})
        res.status(201).json({
          notesdata
        })
    }
    catch(err){
        res.send(err)
    }
  
})
router.post("/postnotes", async (req, res) => {
  const {
    id,
    topic,
    subject,
    price,
    about,
    whatyoulearn,
    coursecontent,
    noteslink

  } = req.body;

  if (
    (!id|| !topic|| !subject|| !price|| !about|| !whatyoulearn|| !coursecontent|| !noteslink)
  ) {
    return res.status(422).json({
      error: "something missing",
    });
  }

  try {
    let NotesExist = await Notes.findOne({ id: id });
    if (NotesExist) {
        return res.status(422).json({
            error: 'ID is not unique exist'
        })
    } 

    const notes = new Notes({  
        id,
        topic,
        subject,
        price,
        about,
        whatyoulearn,
        coursecontent,
        noteslink
     })
    await notes.save() 
    res.status(201).json({ message: 'Notes added successfully',
    
})
  } catch (err) {
    return res.status(400).json({
      error: "error",
    });
  }
});

module.exports = router