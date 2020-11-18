const express = require("express");
const router = express.Router();
const { getFilteredMembers, addMember } = require("../controllers/memberController.js")

// Routes for members
router.route("/:member").get(getFilteredMembers);
router.route("/").post(addMember);

module.exports = router;