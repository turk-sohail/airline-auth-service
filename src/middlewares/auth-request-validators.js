const validateUserAuth = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }
  next();
};

const validateAdminRequest = (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Id is required",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  validateAdminRequest,
};
