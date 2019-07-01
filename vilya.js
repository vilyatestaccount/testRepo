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
var logger = Logger.createLogger('d8e14421399a44a9a35dfc49c7f5f0aa', options);
var logger3 = Logger.createLogger('484dfb3db42e467598d805e719080907', options);


logger.log('Here here here here kjjjkjkjkjkjkjkj');
logger.log('ppppppppppoooooooooo');
logger.log('55555555555');
logger.log('eeeeeeeeeee');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.log('9090909090900');
logger.info('mknkjsdfkjhsdlkjfhksjhdfkhdkshfkshfkjshkdjfhks')


logger3.log('ibmibmibmibmibmibmibmibmibmibmibmibmibmibmibmibm')
logger3.log('ibmibmibmibmibmibmibmibmibmibmibmibmibmibmibmibm')
logger3.log('ibmibmibmibmibmibmibmibmibmibmibmibmibmibmibmibm')
logger3.info('ibmibmibmibmibmibmibmibmibmibmibmibmibmibmibmibm')

// Logger.flushAll((r, k) => {
//     console.log("****")
//     console.log(r)
//     console.log(k)
// });


// logger.info('mknkjsdfkjhsdlkjfhksjhdfkhdkshfkshfkjshkdjfhks')
// logger.info('mknkjsdfkjhsdlkjfhksjhdfkhdkshfkshfkjshkdjfhks')
// logger.info('.;llllllllll')
// logger.info('lllljjjjjjjj')



logger.info('info')

// console.log(logger)

//const o = Logger.flushAll((e, r) => {return "sdsdsds"});
