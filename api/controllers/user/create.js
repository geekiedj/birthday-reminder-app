module.exports = {
  friendlyName: "Create",

  description: "Create user.",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      isEmail: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 8,
      maxLength: 40,
    },
  },

  exits: {
    success: {
      responseType: "redirect",
    },
    notFound: {
      responseType: "notFound",
    },
    serverError: {
      responseType: "serverError",
    },
  },

  fn: async function (inputs, exits) {
    console.log("create action invoked with inputs:", inputs);

    try {
      // TODO: Validate user input

      // TODO: Add code to create the new user
      console.log("User account created successfully!");

      return exits.success({
        message: "User account created successfully!",
        user: {},
      });
    } catch (error) {
      console.error("An error occurred while creating user account:", error);

      return exits.serverError({
        error: "An error occurred while creating user account",
      });
    }
  },
};
