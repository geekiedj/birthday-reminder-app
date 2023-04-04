module.exports = {
  friendlyName: "Create birthday",

  description: "",

  inputs: {
    name: {
      type: "string",
      required: true,
    },

    date: {
      type: "string",
      required: true,
      columnType: "date",
    },
  },

  exits: {
    success: {
      responseType: "redirect",
    },
  },

  fn: async function ({ name, date }) {
    const newBirthday = await Birthday.create({ name, date }).fetch();
    // All done.
    return `/birthdays/${newBirthday.id}`;
    //or destructure even further by `/birthdays/${id}`;
  },
};
