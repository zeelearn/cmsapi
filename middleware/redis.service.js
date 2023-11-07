const redis = require('redis')
const AWS_REDIS_HOST = process.env.AWS_REDIS_HOST;
const AWS_REDIS_PORT = process.env.AWS_REDIS_PORT;

const client = redis.createClient(AWS_REDIS_HOST, AWS_REDIS_PORT);

client.on('connect', function () {
    console.log('Connected!');
});

//client.set('framework', 'ReactJS', function (err, reply) {
//    console.log(reply); // OK
//});
//client.get('framework', function (err, reply) {
//    console.log(reply); // ReactJS
//});


const setCache = (key, value) => {
    client.hmset(key, value);
};

const getCache = (key) => {
    client.hgetall(key, function (err, object) {
        return object; // { javascript: 'ReactJS', css: 'TailwindCSS', node: 'Express' }
    });
};

const IsExists = (key) => {
    client.exists(key, function (err, reply) {
        if (reply === 1) {
            return true;


        } else {
            return false
        }
    });
};

module.export = {
    setCache,
    getCache,
    IsExists

}



