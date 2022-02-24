const express =require("express");
const { addUser, getAllUser, getOneUser, deleteOneUser, updateOneUser, justForTest } = require("../controllers/User.controllers");
const User = require("../models/User");
const router=express.Router();
router.get("/test",justForTest);
//CRUD
//methode: POST
//data: req.body
//url : http://localhost:5000/api/User/
router.post("/",addUser);

//methode: GET
//data:
// url : http://localhost:5000/api/User/
router.get("/",getAllUser);

//methode: Get one User by id
//data: req.params
// url : http://localhost:5000/api/User/:id
router.get("/:id",getOneUser);

//methode: Delete one User by id
//data: id=req.params
// url : http://localhost:5000/api/User/:id
router.delete("/:id",deleteOneUser);

//methode: Put one User by id
//data: id=req.params +body(modification)
// url : http://localhost:5000/api/User/:id
router.put("/:id",updateOneUser);

module.exports=router;