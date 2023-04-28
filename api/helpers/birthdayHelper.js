const User = require("../models/User");

module.exports = {
  friendlyName: "Retrieve birthdays for the next day",

  description: "Retrieves all users whose birthday is tomorrow",

  inputs: {},

  exits: {},

  async fn(inputs) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const users = await User.find({
      date: {
        ">=": today,
        "<": tomorrow,
      },
    });
    return users;
  },
};
