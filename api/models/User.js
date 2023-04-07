/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 8,
      maxLength: 40,
      protect: true,
    },
    // birthdays: {
    //   collection: "birthday",
    //   via: "user",
    // },
  },
  beforeCreate: async function (valuesToSet, proceed) {
    sails.helpers.passwords
      .hashPassword(valuesToSet.password)
      .exec((error, hashedPassword) => {
        if (error) {
          return proceed(err);
        }
        valuesToSet.password = hashedPassword;
        return proceed();
      });
  },
};
