const router =require('express').Router();
const {Intro,About,Project,Experience,Course,Contact} = require('../models/portfolioModel');


router.get('/get-portfolio-data',async(req,res)=>{
    try {
     const intros =await Intro.find();
     const about = await About.find();
     const projects = await Project.find();
     const contact = await Contact.find();
     const course =await Course.find();
     const experience =await Experience.find();

     res.status(200).send({
        intro:intros[0],
        about:about[0],
        projects:projects,
        contact:contact[0],
        experience:experience,
        course:course
     });
    }
    catch(error){
      res.status(500).send(error);
    }
});

module.exports=router;