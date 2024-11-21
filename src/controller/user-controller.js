const UserService = require("../services/user-service");
const { StatusCodes } = require("http-status-codes");
const userService = new UserService();
const jwtService = require("../utils/jwt-service");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await userService.createUser(data);
    return res.status(StatusCodes.CREATED).json({
      message: "User created successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.deleteUser(userId);
    return res.status(StatusCodes.OK).json({
      message: "User deleted successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.signIn(email, password);
    return res.status(StatusCodes.OK).json({
      message: "User signed in successfully",
      data: token,
      success: true,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const response = await userService.isAuthenticated(token);
    return res.status(StatusCodes.OK).json({
      message: "User is authenticated",
      data: response,
      success: true,
      error: {},
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
module.exports = {
  createUser,
  removeUser,
  signIn,
  isAuthenticated,
};
