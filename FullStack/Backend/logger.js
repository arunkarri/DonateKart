const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const logDir = 'log';
const path = require('path');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const filename = path.join(logDir, 'debugger.log');

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp}: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename })
  ]
});

module.exports = logger;