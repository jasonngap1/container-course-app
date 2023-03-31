FROM ubuntu:20.04

WORKDIR /server

RUN apt-get update

RUN apt-get -y install python3.8
RUN apt-get -y install python3.8-distutils
RUN apt-get -y install curl
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python3.8 get-pip.py

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . /server

ENTRYPOINT python3 app.py

