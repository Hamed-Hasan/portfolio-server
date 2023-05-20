const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');

router.post('/project', projectController.createProject);
router.get('/project', projectController.getAllData);
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);

module.exports = router;
