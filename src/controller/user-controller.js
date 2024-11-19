const UserService = require("../services/user-service");
const { StatusCodes } = require("http-status-codes");
const userService = new UserService();
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

module.exports = {
  createUser,
  removeUser,
};
