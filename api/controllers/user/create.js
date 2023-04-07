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
      description: "User account created successfully",
    },
    notFound: {
      responseType: "notFound",
    },
    serverError: {
      responseType: "serverError",
    },
  },

  fn: async function ({ name, email, password }) {
    try {
      const newUser = await User.create({ name, email, password }).fetch();
      sails.log(newUser);
      this.req.session.userId = newUser.id;
      return "/";
    } catch (error) {
      sails.log(error);
      throw "serverError";
    }
  },
};
