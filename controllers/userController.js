const { User } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate({ path: "User", select: "-__v" })
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
};
