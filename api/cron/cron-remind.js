const cron = require("node-cron");
const nodemailer = require("nodemailer");
const User = require("../models/User");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

//schedule reminder
const job = cron.schedule("*/10 * * * * *", async () => {
  console.log("Running reminder job...");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const users = await User.find({
    date: {
      ">=": today,
      "<": tomorrow,
    },
  }).catch((error) => {
    console.log(`Error querying users: ${error}`);
  });
  users.forEach((user) => {
    const mailOptions = {
      from: "barbarannegarnet@gmail.com",
      to: user.email,
      subject: "Birthday Reminder",
      text: `Hi ${user.name}, Just a friendly reminder that ${user.name}'s birthday is coming up tomorrow!`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
        console.log(info.response);
      }
    });
  });
});

module.exports = job;
