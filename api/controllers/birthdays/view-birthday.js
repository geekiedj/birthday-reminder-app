module.exports = {
  friendlyName: "View birthday",

  description: 'Display "Birthday" page.',

  inputs: {
    id: {
      type: "number",
      isInteger: true,
      required: true,
    },
  },

  exits: {
    success: {
      viewTemplatePath: "pages/birthdays/birthday",
    },
    notFound: {
      responseType: "notFound",
    },
  },

  fn: async function ({ id }) {
    const birthday = await Birthday.findOne(id);
    if (!birthday) {
      throw "notFound";
    }
    // Respond with view.
    return { birthday };
  },
};
