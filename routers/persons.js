const express = require("express");
const router = express.Router();
const Contact = require("../models/Person");
const Controllers = require("../controllers/person.controller");

// router.get("/", (req, res) => {
//   res.send("hello back end");
// });

//@POST method
//@desc post person
//http://localhost:6000/api/person
//Params body
router.post("/", Controllers.postPerson);

//@GET method
//@desc get person
//http://localhost:6000/api/person
//Params body
router.get("/", Controllers.FindAllPerson);

//@method GET
//@desc get person by id
//http://localhost:6000/api/person/:id
//Params id
router.get("/:id", Controllers.FindOnePersonByID);

//@method DELETE
//@desc Delete person by id
//http://localhost:6000/api/person/:id
//Params id
router.delete("/:id", Controllers.DeletePersonByID);

//@method PUT
//@desc update person by id
//http://localhost:6000/api/person/:id
//Params id body
router.put("/:id", Controllers.UpdatePerson);

module.exports = router;
