module.exports = {


  friendlyName: 'View signup',


  description: 'Display "Signup" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user/signup'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
