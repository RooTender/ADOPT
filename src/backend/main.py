from fastapi import FastAPI
import pika

app = FastAPI()

connection = pika.BlockingConnection(pika.ConnectionParameters('broker'))
channel = connection.channel()
channel.queue_declare(queue='hello')


@app.get('/')
async def test():
    channel.basic_publish(exchange='',
                          routing_key='hello',
                          body='Hello World!')
    print(" [x] Sent 'Hello World!'")
    return {"message": "Hello world!"}
