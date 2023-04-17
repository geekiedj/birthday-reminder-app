module.exports = {
  friendlyName: "Reminder",

  description: "Reminder birthdays.",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    sails.hooks.cron.jobs.remindUpcomingBirthdays.start(); // Add this line to start the cron job
    console.log(res.ok("Reminders have been set up"));
  },
};
