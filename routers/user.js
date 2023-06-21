const express=require('express');
const userController=require('../controllers/user.js');

const router=express.Router();
//router.get("/createdatabase",userController.createuser);
//router.post("/insertuser",userController.insertuser);
//router.get("/getuser",userController.getuser);
router.get("/updateuser",userController.updateuser);


module.exports = router;