module.exports = {
  friendlyName: "View birthdays",

  description: 'Display "Birthdays" page.',

  exits: {
    success: {
      viewTemplatePath: "pages/birthdays/birthdays",
    },
  },

  fn: async function () {
    const birthdays = await Birthday.find().sort("createdAt DESC");
    // Respond with view.
    return { birthdays };
  },
};
