const kafka = require('no-kafka');

const consumer = new kafka.SimpleConsumer({
  connectionString: process.env.KAFKA_URL
});

const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach((m) => {
    console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
  });
};

module.exports.init = () => {
  return consumer.init()
  .then(() => {
    return consumer.subscribe(process.env.KAFKA_TOPIC, [0], dataHandler);
  });
}
