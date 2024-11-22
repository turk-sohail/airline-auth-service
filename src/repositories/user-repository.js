const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
class UserRepository {
  async checkPassword(string, hash) {
    try {
      const isValid = await bcrypt.compare(string, hash);
      return isValid;
    } catch (error) {
      console.log("something went wrong", error);
    }
  }

  async createUser(data) {
    try {
      const { password } = data;
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Error creating user", error);
      throw error;
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log("Error fetcing  user", error);
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
  async getUser(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: {
          exclude: ["password"],
        },
      });
      return user;
    } catch (error) {
      console.log("Error getting user", error);
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("Error getting user", error);
      throw error;
    }
  }
}

module.exports = UserRepository;
