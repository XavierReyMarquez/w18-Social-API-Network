const { User } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate({ path: "thoughts", select: "-__v" })
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.UserId })
      .populate({ path: "User", select: "-__v" })
      .then((userData) =>
        !post
          ? res.status(404).json({ message: "No Friend with that ID" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a user POST

  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // update users data by _id PUT

  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this ID!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};
