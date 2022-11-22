
const express = require("express");
const{createUser,getAllUsers, getbyIdUser, deleteUser} =require("../controller/userController")
const router = express.Router();


// create user
router.post('/user', createUser);

router.get("/users",getAllUsers);

router.get("/user/:id", getbyIdUser);



module.exports = router;