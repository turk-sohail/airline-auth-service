const { User } = require("../models");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Error creating user", error);
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.destroy({
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("Error deleting user", error);
      throw error;
    }
  }
}

module.exports = UserRepository;
