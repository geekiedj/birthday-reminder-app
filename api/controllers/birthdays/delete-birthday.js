module.exports = {
  friendlyName: "Delete birthday",

  description: "",

  inputs: {
    id: {
      type: "number",
      isInteger: true,
      required: true,
    },
  },

  exits: {
    success: {
      responseType: "redirect",
    },
  },

  fn: async function ({ id }) {
    await Birthday.destroyOne(id);
    // All done.
    return "/birthdays";
  },
};
