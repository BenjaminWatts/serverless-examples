### Serverless starter

Basic fargate container (in Python) that fires at 9am every day (UTC).
Could be used to a long-running scheduled process.

Can also be connected to kinesis/sqs for applications where a background task is required.

Note that redployment of the function can occur using `sls deploy --function=fargatePython`