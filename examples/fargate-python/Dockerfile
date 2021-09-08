FROM public.ecr.aws/lambda/python:3.8
ADD requirements.txt .
RUN pip install -r requirements.txt
ADD app.py ./
CMD ["app.handler"]