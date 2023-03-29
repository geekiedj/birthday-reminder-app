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
  },

  fn: async function create(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });

      return res.ok({ message: "User account created successfully!", user });
    } catch (error) {
      return res.serverError({
        error: "An error occurred while creating user account",
      });
    }
  },
};
