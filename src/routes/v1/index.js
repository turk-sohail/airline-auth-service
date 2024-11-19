const router = require("express").Router();

const userController = require("../../controller/user-controller");

router.post("/signup", userController.createUser);
router.delete("/delete/:id", userController.removeUser);

module.exports = router;
