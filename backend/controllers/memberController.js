const db = require("../db/db.js")

// @desc    Get filtered members
// @route   GET /api/members/:member
// @access  Public

const getFilteredMembers = (req,res) => {
  
  const textToFind = req.params.member
// Filter DB
  const filtered = db.people.filter(user => {
    const regex = new RegExp(textToFind, 'gi');
    return user.name.match(regex);
 
})
// Return filtered DB
res.send(filtered);
}

// @desc    Add member
// @route   POST /api/members
// @access  Public

const addMember = (req,res) => {
  // Get member from request body
  const user = req.body;
   // Add Member to DB
  db.people.push(user);
  // Send response 
 res.send({success:true})

}

module.exports = { getFilteredMembers ,addMember }