const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const userController = require('../controllers/userController');

// Project routes
router.delete('/project/:id', projectController.deleteProject);
router.post('/project', projectController.createProject);
router.get('/project', projectController.getAllProjects);

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);

module.exports = router;
