module.exports = {
  friendlyName: "View edit",

  description: 'Display "Edit" page.',

  inputs: {
    id: {
      type: "number",
      isInteger: true,
      required: true,
    },
  },

  exits: {
    success: {
      viewTemplatePath: "pages/birthdays/edit",
    },
  },

  fn: async function ({ id }) {
    const birthdayToBeUpdated = await Birthday.findOne(id);

    // Respond with view.
    return { birthdayToBeUpdated };
  },
};
