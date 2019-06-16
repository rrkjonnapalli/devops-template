const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const redis = require("redis");

const kafkaConsumer = require('./kafka-consumer');
const kafkaProducer = require('./kafka-producer');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

const PORT = process.env.PORT || 3333;
const server = http.createServer((req, res) => {
  res.end('Server is Up');
}).listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});

MongoClient.connect(MONGODB_URL, (err, client) => {
  if (err) {
    console.log('Mongo connection failed');
    throw err;
  }
  console.log("Connected successfully to mongo db server");
});

const redisClient = redis.createClient(REDIS_URL);

// kafka
setTimeout(() => {
  kafkaConsumer.init();
  kafkaProducer.init();
}, 5000);

process.on('uncaughtException', (err) => {
  console.log('uncaught exception', err);
});