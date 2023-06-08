//importing redis and util package
const redis = require('redis');
const {promisify} = require('util');

// redis connection
const client = redis.createClient(
    18359,
    "redis-18359.c61.us-east-1-3.ec2.cloud.redislabs.com",
    {no_ready_check: true}
);


// redis authorization
client.auth('CSAYbyXwTnRJ9hSZBHjuO7pPR2YlWoYN',function(err){
    if(err){
        console.log(err);
    }
})

// using SETEX and GET functionality of redis
const SETEX_ASYNC = promisify(client.SETEX).bind(client);
const GET_ASYNC = promisify(client.GET).bind(client)



client.on('connect', () => {
    console.log('Redis connected');
});

// exporting 
module.exports.GET_ASYNC = GET_ASYNC
module.exports.SETEX_ASYNC = SETEX_ASYNC