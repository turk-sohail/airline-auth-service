const UserRepository = require("../repositories/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(data) {
    try {
      return await this.userRepository.createUser(data);
    } catch (error) {
      throw error;
    }
  }
  async deleteUser(userId) {
    return await this.userRepository.deleteUser(userId);
  }
}

module.exports = UserService;
