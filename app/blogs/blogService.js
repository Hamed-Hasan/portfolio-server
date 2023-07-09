// services/blogService.js

const Blog = require("./Blog");


async function createBlog(blogData) {
  const blog = new Blog(blogData);
  await blog.save();
  return blog;
}

async function getBlogById(id) {
  return Blog.findById(id);
}

async function updateBlog(id, blogData) {
  const blog = await Blog.findByIdAndUpdate(id, blogData, { new: true });
  return blog;
}

async function deleteBlog(id) {
  await Blog.findByIdAndDelete(id);
}

async function searchBlogs(searchQuery, page, limit) {
  try {
    const searchRegex = new RegExp(searchQuery, 'i');
    const query = {
      $or: [
        { title: searchRegex },
        { badges: searchRegex },
        { author: searchRegex },
      ],
    };

    if (Date.parse(searchQuery)) {
      // If searchQuery is a valid date, include it in the query
      query.$or.push({ date: searchQuery });
    }

    const blogs = await Blog.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCount = await Blog.countDocuments(query);

    return { blogs, totalCount };
  } catch (error) {
    console.error('Search blogs error:', error);
    throw new Error('Failed to search blogs');
  }
}

async function getPaginatedBlogs(page, limit) {
  const blogs = await Blog.find({})
    .skip((page - 1) * limit)
    .limit(limit);

  const totalCount = await Blog.countDocuments();

  return { blogs, totalCount };
}

module.exports = {
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  searchBlogs,
  getPaginatedBlogs,
};
