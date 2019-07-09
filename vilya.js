var Logger = require('/Users/vilya/logdna/nodejs');

var options = {
    hostname: 'host',
    ip: '75.10.4.81',
    mac: '02:9c:5d:c8:34:2c',
    app: 'appName',
    env: 'envName',
    flushLimit: 200,
    flushInterval: 1000,
    tag: 'birdybird'
};

// Defaults to false, when true ensures meta object will be searchable
options.index_meta = true;

// Add tags in array or comma-separated string format:
options.tags = ['logging', 'nodejs', 'logdna'];
// or:
options.tags = 'logging,nodejs,logdna';

// Create multiple loggers with different options
var logger = Logger.createLogger('36667db7ce12fcadf573ec44dd94af20', options);
var logger3 = Logger.createLogger('ab37921179dccd5eb6ed9898b9ef8f54', options);



logger.log("JJJJJJJJJJJJJJJJJjjjhjjjjjjjjjjjj")
logger3.error("000000000000000000000000000000")
logger.debug("DEBUGDEBUGDEBUGDEBUGDEBUGDEBUGDEBUGDEBUG")
logger.trace("TRACETRACETRACETRACETRACETRACETRACETRACE")






Logger.flushAll((r, k) => {
    console.log("****")
    console.log(r)
    console.log(k)
});