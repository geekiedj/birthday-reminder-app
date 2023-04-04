module.exports = {


  friendlyName: 'View new',


  description: 'Display "New" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/birthdays/new'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
