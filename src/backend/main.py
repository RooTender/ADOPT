from fastapi import FastAPI
import pika

app = FastAPI()

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue='xd')

@app.get('/')
async def test():
    channel.basic_publish(exchange='',
                      routing_key='xd',
                      body='Hello World!')
    print(" [x] Sent 'Hello World!'")
    return {"message": "Hello world!"}

connection.close()