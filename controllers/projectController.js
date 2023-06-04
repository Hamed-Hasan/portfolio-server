const Project = require("../models/projectModel");
const { createProjectService, getProjects, deleteProjectById, updateProjectById } = require("../services/projectService");


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


// Update project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    // Find the project by ID and update its fields
    const project = await updateProjectById(id, updatedData, { new: true });

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json(project);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};