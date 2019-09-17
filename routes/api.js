const express= require('express');
const app = new express();
const router = express.Router();
const user = require('../MODEL/user');
const models = require('../MODEL/models')
const validateSignUp=  require('../validation/validateSignUp');
const validateSingIn= require("../validation/validateSignIn");
const validatePost= require("../validation/validatePost");
const Joi= require('@hapi/joi');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors());

router.post('/signup', (req, res)=>{
    const userDetails = req.body;
    console.log(req.body)
    const validateBody= Joi.validate(userDetails, validateSignUp);

    if(validateBody.error){
        return res.json(validateBody.error);
    }
    //Using bcrypt Glover@123
    user.findOne({email:userDetails.email}, (err,emailAddress)=>{
        if(err){
            return res.json("An error occured ")
        }
        else if(!emailAddress){
            const password = userDetails.password
            const salt= bcrypt.genSaltSync(saltRounds);
            const hash= bcrypt.hashSync(password, salt);
            userDetails.password= hash;
            const newUser = new user(userDetails);
            newUser.save((err,doc)=>{
                if(err){
                    console.log("An error occured while saving")
                }
                else if(doc){
                    return res.json({
                    status : true,
                    userdetails: doc
                    })
                }
            })
        }
        else{
            return res.json({
                msg: "An existing email occurs"
            })
        }
    })
});

router.post("/signin", (req, res) =>{
    const confirmDetails= req.body;
    const validateBody = Joi.validate(confirmDetails,validateSingIn);
    if(validateBody.error){
        return res.json(validateBody.error);
    }
    user.findOne({email:confirmDetails.email},(err,doc)=>{
        if(err){
            console.log("An error occured while searching")
        }
        else if(doc && bcrypt.compareSync(confirmDetails.password,doc.password)){
            return res.status(200).json({
                status : true,
                msg: "You are successfully signed in"
            })
        }
        else{
            return res.json({
                status:false,
                msg: "No matching details"
            })
        }
    })
})

router.post('/post', (req, res)=>{
    const confirmPost = req.body;
    const validatePublish = Joi.validate(confirmPost, validatePost);
    if (validatePublish.error){
        console.log(validatePublish.error)
    }
    const newPost = new models(confirmPost);
    newPost.save((err,doc)=>{
        if(err){
            console.log('The messages could not be posted')
            return res.json({
                message: "message not posted",
                status : '400'

            })
        }
        else if(doc)(
                 res.status(200).json({
                status: true,
                post: doc,
                message: `Post successfully saved`
            })
        )
    });

})

//Tested on Postman to get Posts
router.get('/getdata',(req,res)=>{
    models.find({'title':'mongo'},(err,doc)=>{
        return res.json(doc)
    })
})
   module.exports = router;
