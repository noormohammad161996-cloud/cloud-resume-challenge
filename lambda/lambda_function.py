import json

def lambda_handler(event, context):

    response = {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Visitor counter will be implemented in Phase 2."
        })
    }

    return response