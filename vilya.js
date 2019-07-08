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







// Logger.flushAll((r, k) => {
//     console.log("****")
//     console.log(r)
//     console.log(k)
// });


// logger.info('mknkjsdfkjhsdlkjfhksjhdfkhdkshfkshfkjshkdjfhks')
// logger.io('mknkjsdfkjhsdlkjfhksjhdfkhdkshfkshfkjshkdjfhks')



logger.info('.;llllllllll')
logger.info('lllljjjjjjjj')





{"_account":"b1720d687f","_cluster":"ld60","_host":"sysdig-agent-2s84v","_ingester":"agent","_label":{},"_logtype":"customapp","_tag":["agent-v2-ga","agent-v2"],"_file":"/var/log/containers/sysdig-agent-2s84v_sysdig-agent_sysdig-agent-4023f3809fe21d60d7e70d4e6bcf69eb7071da0ace33f28ccffcd7eafcdc832c.log","_line":"51.075, 2335, Information, Creating Docker object ...","level":null,"_ts":1562181711075,"_app":"sysdig-agent","pod":"sysdig-agent-2s84v","namespace":"sysdig-agent","container":"sysdig-agent","containerid":"4023f3809fe21d60d7e70d4e6bcf69eb7071da0ace33f28ccffcd7eafcdc832c","node":"kube-dal12-cr8a46dfee63b448a395dc168c7e106ccd-w3\n","_ip":"172.30.23.190","__key":"logline:b1720d687f:sysdig-agent:sysdig-agent-2s84v:ld60","_bid":"1ef88b42-8a27-4e4d-90ee-2fb5c853ac09:32896:ld60","_id":"1099669805097443340"}















curl --request GET \
>   --url 'https://app.us-south.logging.test.cloud.ibm.com/v1/export?from=1554661964000&to=1554748364000' \
>   --header 'authorization: Basic 484dfb3db42e467598d805e719080907'



curl --request GET \ --url 'https://api.us-south.logging.test.cloud.ibm.com/v1/export?to=$(date +%s)000' \ --header 'authorization: Basic 484dfb3db42e467598d805e719080907'




logger.info('info')

// console.log(logger)

//const o = Logger.flushAll((e, r) => {return "sdsdsds"});

curl https://app.us-south.logging.test.cloud.ibm.com/v1/export?to=$(date +%s)000&from=$(($(date +%s)-86400))000&hosts=mzone701 -u 3bea7b2e80a841ceb46a014f6ad4aa4b:



curl https://app.use.int.logdna.net/v1/export?to=$(date +%s)000&from=$(($(date +%s)-86400))000&hosts=cold010 -u 36df2a29e56b74b9789ebac25bf03c65f: