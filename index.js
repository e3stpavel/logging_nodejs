const graylog2 = require('graylog2');

const logger = new graylog2.graylog({
    servers: [{ 'host': 'direct.gubanov.ee', port: 12201 }],
    hostname: 'pavel.mayorov',
    facility: 'Pavel Mayorov'
});

logger.log('Greetings from Pavel Mayorov! bruh');

// Log your Node.js uncaught errors
/*process.on('uncaughtException', function(err) {
    logger.log(err, {
      type: 'uncaughtException'
    });
});*/