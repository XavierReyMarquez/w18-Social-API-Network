const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser).put(updateUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;
