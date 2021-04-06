const express = require('express');
const passport = require('passport');
const router = express.Router();
// const auth = require('../middlewares/auth');
const MenuController = require('../controllers/menuController');


// GET ALL MENU
router.get('/allMenu', MenuController.getAllMenu)

// GET SINGLE MENU BY ID
router.get('/oneMenu/:id', MenuController.getOneMenuId)

// GET SINGLE MENU BY LABEL
router.get('/oneLabel/:label', MenuController.getOneMenuLabel)

// CREATE NEW MENU
router.post('/newMenu', MenuController.addMenu)

// UPDATE MENU
router.put('/updateMenu/:id', MenuController.updateMenu)

// DELETE MENU
router.delete('/deleteMenu/:id', MenuController.deleteMenu)


// export router
module.exports = router; 