const { CronJob } = require('cron');
const path = require('path');
const logger = require('../libraries/logger');
const dataTypeUtils = require('../utils/dataTypeUtils');
const demoCron = require('./demoCron');

const scriptName = path.basename(__filename);

class Crons {
  constructor() {
    this.crons = [
      {
        name: 'DEMO',
        time: '30 6 * * Tue', // Tuesday 6:30 AM IST (12PM in India)
        job: demoCron
      }
    ];
  }

  initCrons() {
    this.crons.forEach(cron => {
      new CronJob(cron.time, async () => {
        try {
          logger.info(scriptName, `'${cron.name}' cron started`);

          const job = cron.job();
          if (dataTypeUtils.isPromise(job)) {
            await job;
          }

          logger.info(scriptName, `'${cron.name}' cron completed`);
        } catch (error) {
          logger.error(scriptName, `'${cron.name}' cron failed`, error);
        }
      }).start();
    });
  }
}

module.exports = new Crons();
