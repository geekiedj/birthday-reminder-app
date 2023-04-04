module.exports = {
  friendlyName: "Update birthday",

  description: "",

  inputs: {
    id: {
      type: "number",
      isInteger: true,
      required: true,
    },
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

  fn: async function ({ id, name, date }) {
    //update and set birthday by id
    const updatedBirthday = await Birthday.updateOne({ id }).set({
      name,
      date,
    });
    sails.log(updatedBirthday);
    // All done.
    return `/birthdays/${updatedBirthday.id}`;
  },
};
