const router = require("express").Router();
const userController = require("../controllers/user.controller.js");
const jwtHelper=require('../config/jwtHelper')

router.post("/register", userController.register);
router.post("/authenticate", userController.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken,userController.userProfile)

module.exports = router;