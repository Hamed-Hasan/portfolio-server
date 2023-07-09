const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const userController = require('../controllers/userController');
const { submitMessage } = require('../mail/contactController');

const blogController = require('../app/blogs/blogController');


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




// blog routes 
router.post('/blog', blogController.createBlog);
router.get('/blog/:id', blogController.getBlogById);
router.put('/blog/:id', blogController.updateBlog);
router.delete('/blog/:id', blogController.deleteBlog);

router.get('/search', blogController.searchBlogs);
router.get('/pagination', blogController.getPaginatedBlogs);
router.post('/blogs/:id/like', blogController.updateLikeCount);

module.exports = router;
