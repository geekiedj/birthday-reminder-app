const cron = require("node-cron");

const job = cron.schedule("* * * * *", () => {
  console.log("Running cron job");
});

module.exports = job;
