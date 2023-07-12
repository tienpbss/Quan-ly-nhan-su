const express = require('express');

const userControllers = require('../controllers/user.controllers');
const router = express.Router();

router.post('/createUser', userControllers.createUser)
router.get('/viewAllUsers', userControllers.getAllUsers)




module.exports = router;