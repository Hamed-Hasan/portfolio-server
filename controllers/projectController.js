const Project = require("../models/projectModel");
const { createProjectService, getProjects, deleteProjectById } = require("../services/projectService");


// GET all data
exports.getAllProjects = async (req, res) => {
  try {
    const data = await getProjects();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create new data
exports.createProject = async (req, res) => {
    try {
      const newData = await createProjectService(req.body);
      res.status(201).json(newData);
     
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };



// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    await deleteProjectById(projectId);
    res.status(200).send({ message: 'Project successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};