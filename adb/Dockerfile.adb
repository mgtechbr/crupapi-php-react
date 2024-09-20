FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y android-tools-adb

ENTRYPOINT ["adb"]
