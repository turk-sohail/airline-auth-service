const UserRepository = require("../repositories/user-repository");
const jwtService = require("../utils/jwt-service");

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

  async signIn(email, password) {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      if (!user) {
        throw new Error("User not found");
      }
      const isValid = await this.userRepository.checkPassword(
        password,
        user.password
      );
      if (!isValid) {
        throw new Error("Invalid password");
      }
      const payload = { id: user.id, email: user.email };
      const token = await jwtService.createToken(payload);
      user.token = token;
      return token;
    } catch (error) {
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
      const payload = await jwtService.verifyToken(token);
      const user = await this.userRepository.getUser(payload.id);

      if (!user) {
        throw { error: "Corresponding user not found" };
      }
      return user.id;
    } catch (error) {
      throw error;
    }
  }

  async isAdmin(id) {
    try {
      return await this.userRepository.isAdmin(id);
    } catch (error) {
      console.log("error in user service");
      throw error;
    }
  }
}

module.exports = UserService;
