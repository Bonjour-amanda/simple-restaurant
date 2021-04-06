const express = require('express');
const passport = require('passport');
const router = express.Router();
// const auth = require('../middlewares/auth');
const SubmenuController = require('../controllers/submenuController');


// GET ALL SUBMENU
router.get('/allSubmenu', SubmenuController.getAllSubmenu )

// GET SINGLE Submenu BY ID
router.get('/oneSubmenu/:id', SubmenuController.getOneSubmenuId)

// GET SINGLE Submenu BY LABEL
router.get('/oneSublabel/:label', SubmenuController.getOneSubmenuLabel)

// CREATE NEW Submenu
router.post('/newSubmenu', SubmenuController.addSubmenu)

// UPDATE Submenu
router.put('/updateSubmenu/:id', SubmenuController.updateSubmenu)

// DELETE Submenu
router.delete('/delete/:id', SubmenuController.deleteSubmenu)


// export router
module.exports = router; 