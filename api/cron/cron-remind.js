const cron = require('node-cron');

cron.schedule('* * * * *', () => {
    console.log('Running cron job');
})

module.exports = {
    scheduleJob: cron
}