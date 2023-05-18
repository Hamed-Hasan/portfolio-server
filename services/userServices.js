const User = require('../models/userModel');

class UserService {
  async createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async getUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  }
}

module.exports = new UserService();
