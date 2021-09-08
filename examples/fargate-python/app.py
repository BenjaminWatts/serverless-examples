import json

def handler(event, context):
    print('event received')
    print(json.dumps(event))
    print(json.dumps(context))
    print('event finished')