export default () => ({
  rabbitmq: {
    user: process.env.RABBITMQ_USER || 'guest',
    password: process.env.RABBITMQ_PASSWORD || 'guest',
    host: process.env.RABBITMQ_HOST || 'localhost',
    port: parseInt(process.env.RABBITMQ_PORT || '5672', 10),
    queue: process.env.RABBITMQ_QUEUE || 'complaints_queue',
    get url() {
      return `amqp://${this.user}:${this.password}@${this.host}:${this.port}`;
    },
  },
});
