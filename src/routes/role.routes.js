const express = require('express');

const roleControllers = require('../controllers/role.controllers')
const router = express.Router();

router.post('/createRole', roleControllers.createRole);
router.get('/viewAllRoles', roleControllers.viewAllRoles);
router.get('/viewRole/:_idRole', roleControllers.viewRole);
router.patch('/editRole/:_idRole', roleControllers.editRole);
router.delete('/deleteRole/:_idRole', roleControllers.deleteRole);

module.exports = router;