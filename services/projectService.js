const Project = require("../models/projectModel");


// Service to retrieve data
exports.getData = async () => {
  try {
    const data = await Project.find();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
// Service to create data
exports.createProjectService = async (data) => {
    try {
      const newData = await Project.create(data);
      return newData;
    } catch (error) {
      throw new Error('Failed to create data');
    }
  };