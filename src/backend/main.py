from fastapi import FastAPI
from broker import RabbitMQBroker

app = FastAPI()

transit_viewer = RabbitMQBroker(queue_name='Transit Visualizer')
queue2_broker = RabbitMQBroker(queue_name='queue2')


@app.get('/')
async def send_to_queue1():
    transit_viewer.send_message('Hello from Queue 1!')
    return {"message": "Message sent to Queue 1"}


@app.get('/test')
async def send_to_queue2():
    queue2_broker.send_message('Hello from Queue 2!')
    return {"message": "Message sent to Queue 2"}


@app.on_event("shutdown")
async def shutdown_event():
    transit_viewer.close()
    queue2_broker.close()
