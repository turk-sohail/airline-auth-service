const { JWT_SECRET } = require("../config/server-config");

const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
    return token;
  } catch (error) {
    throw error;
  }
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createToken,
  verifyToken,
};
