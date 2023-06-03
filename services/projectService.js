const Project = require("../models/projectModel");


// Service to retrieve data
exports.getProjects = async () => {
  try {
    const data = await Project.aggregate([
      { $sort: { priority: 1 } }
    ]);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};


// Service to create data
exports.createProjectService = async (data) => {
    try {
      const newData = await Project.create(data);
      console.log(newData);
      return newData;
    } catch (error) {
      throw new Error('Failed to create data');
    }
  };