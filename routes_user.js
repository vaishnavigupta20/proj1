const express = require('express');
const router = express.Router();
const {handleGetAllUsers, handleGetUserById,  handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../controllers/user");
router.get("/", handleGetAllUsers);
router.post("/", handleCreateNewUser);

router.get("/:id", handleGetUserById);
router.patch("/:id", handleUpdateUserById);
router.delete("/:id", handleDeleteUserById);


module.exports = router;