const winston = require('winston');
var path = require('path');
var way = path.resolve(__dirname, __filename);// module.filename.split('/').slice(-2).join('/');
const logger = winston.createLogger({
 level: 'info',
 format: winston.format.json(),
 label: way,
 defaultMeta: { service: 'user-service' },
  
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
    colorize: true,
  }));
}

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;
