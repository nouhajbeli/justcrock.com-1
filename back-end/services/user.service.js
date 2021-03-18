module.exports = new (class userService {
    constructor() {
      this.user= require("../models/user.model.js");
    }
  
    adduser(payload) {
      return this.user.create(payload);
    }
  
  
    
  })();