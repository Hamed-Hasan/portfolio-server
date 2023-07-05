// controllers/blogController.js
const blogService = require('./blogService');

async function createBlog(req, res) {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
}

async function getBlogById(req, res) {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.status(404).json({ error: 'Blog not found' });
  }
}

async function updateBlog(req, res) {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.json(blog);
  } catch (error) {
    res.status(404).json({ error: 'Blog not found' });
  }
}

async function deleteBlog(req, res) {
  try {
    await blogService.deleteBlog(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Blog not found' });
  }
}

async function searchBlogs(req, res) {
  try {
    const { query, page, limit } = req.query;
    const searchResult = await blogService.searchBlogs(query, parseInt(page), parseInt(limit));
    res.json(searchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to search blogs' });
  }
}


async function getPaginatedBlogs(req, res) {
  try {
    const { page, limit } = req.query;
    const paginatedBlogs = await blogService.getPaginatedBlogs(parseInt(page), parseInt(limit));
    res.json(paginatedBlogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch paginated blogs' });
  }
}

module.exports = {
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  searchBlogs,
  getPaginatedBlogs,
};
