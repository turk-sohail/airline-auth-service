const router = require("express").Router();

const userController = require("../../controller/user-controller");
const { authValidateMiddleware } = require("../../middlewares");

router.post(
  "/signup",
  authValidateMiddleware.validateUserAuth,
  userController.createUser
);
router.delete(
  "/delete/:id",
  authValidateMiddleware.validateUserAuth,
  userController.removeUser
);
router.post("/signin", userController.signIn);

module.exports = router;
