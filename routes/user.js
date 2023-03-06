const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/", userController.CreateUser);  // create user

router.put("/:id", userController.UpdateUser); // update user


module.exports = router;
