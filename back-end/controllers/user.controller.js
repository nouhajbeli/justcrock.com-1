const userService = require("../services/user.service.js");

module.exports = {
  
    async register(req, res, next) {
        try {
            const user= await userService.adduser(req.body);
            res.send(user);
          } catch (error) {
            res.send(error);
          }   
         }
   
  };