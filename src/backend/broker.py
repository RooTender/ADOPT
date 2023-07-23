import pika


class RabbitMQBroker:
    def __init__(self, queue_name):
        self.queue_name = queue_name
        self.connection = None
        self.channel = None
        self.connect()

    def connect(self):
        try:
            self.connection = pika.BlockingConnection(
                pika.ConnectionParameters('broker'))
            self.channel = self.connection.channel()
            self.channel.queue_declare(queue=self.queue_name)
            print(f" [{self.queue_name}] Hello, I am ALIVE!")
        except pika.exceptions.AMQPError as exc:
            print(f"Failed to establish RabbitMQ connection: {exc}")

    def send_message(self, message):
        try:
            if self.channel is None or self.channel.is_closed:
                self.connect()
            if self.channel is not None:
                self.channel.basic_publish(
                    exchange='',
                    routing_key=self.queue_name,
                    body=message,
                )
                print(f" [{self.queue_name}] Sent:\n{message}")
            else:
                print(
                    f" [{self.queue_name}] Failed to send message: RabbitMQ connection is not available.")
        except pika.exceptions.AMQPError as exc:
            print(f"Failed to send message: {exc}")

    def close(self):
        if self.channel is not None and not self.channel.is_closed:
            self.channel.close()
        if self.connection is not None and not self.connection.is_closed:
            self.connection.close()
        print(f"Disconnected from RabbitMQ queue: {self.queue_name}")
