const { authenticate } = require("passport");
const userService = require("../services/user.service.js");
const passport=require('passport')
const User= require("../models/user.model.js");
const _=require('lodash');
module.exports = {
  
    async register(req, res, next) {
        try {
            const user= await userService.adduser(req.body);
            res.send(user);
          } catch (error) {
            res.send(error);
          }   
         },

         async authenticate (req, res, next){
          passport.authenticate('local',(err,user,info)=>{
            if(err) 
            return res.status(400).json(err);
            else if(user)
            return res.status(200).json({"token":user.generateJwt()})
            else return res.status(404).json(info)
          })(req,res)
         },
         async userProfile(req, res, next){
           User.findOne({_id:req._id},
            (err,user)=>{
              if(!user)
              return res.status(404).json({status:false,message:'User recors not found'})
              else return res.status(200).json({status:true,user:_.pick(user,['fullName','email'])})
            });
         }
   
  };