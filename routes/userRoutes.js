const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const userController = require('../controllers/userController');
const { submitMessage } = require('../mail/contactController');

// Project routes
// Update project
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);
router.post('/project', projectController.createProject);
router.get('/project', projectController.getAllProjects);

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);

// Submit message route
router.post('/api/submit-message', submitMessage);

module.exports = router;
