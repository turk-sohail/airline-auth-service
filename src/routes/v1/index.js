const router = require("express").Router();

const userController = require("../../controller/user-controller");

router.post("/signup", userController.createUser);
router.delete("/delete/:id", userController.removeUser);
router.post("/signin", userController.signIn);

module.exports = router;
