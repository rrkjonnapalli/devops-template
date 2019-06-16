const kafka = require('no-kafka');

function startJob(producer) {
  let counter = 1;
  setInterval(() => {
    producer.send({
        topic: process.env.KAFKA_TOPIC,
        partition: 0,
        message: {
          value: 'Counter: ' + counter
        }
      })
      .then((result) => {
        counter++;
        console.log(result);
      });
  }, 1000);
}

const producer = new kafka.Producer({
  connectionString: process.env.KAFKA_URL
});

module.exports.init = () => {
  producer.init()
  .then(() => {
    console.log('producer init done');
    startJob(producer);
});
};
