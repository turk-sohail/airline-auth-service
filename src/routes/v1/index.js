const router = require("express").Router();

const userController = require("../../controller/user-controller");
const { authValidateMiddleware } = require("../../middlewares");
const {
  validateUserAuth,
} = require("../../middlewares/auth-request-validators");

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
router.get("/isAuthenticated", userController.isAuthenticated);
router.get(
  "/isAdmin",
  authValidateMiddleware.validateAdminRequest,
  userController.isAdmin
);

module.exports = router;
