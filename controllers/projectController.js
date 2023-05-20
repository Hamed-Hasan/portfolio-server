const Project = require("../models/projectModel");
const { createProjectService } = require("../services/projectService");


// GET all data
exports.getAllData = async (req, res) => {
  try {
    const data = await Project.find();
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