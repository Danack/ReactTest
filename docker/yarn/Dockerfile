FROM node:7.10.0

RUN mkdir -p /opt

# Copy the code
ADD . /opt/app

WORKDIR /opt/app

RUN tar -xvf yarn-latest.tar.gz

ENV PATH "$PATH:/opt/app/dist/bin"


VOLUME ["/var/app"]
VOLUME ["/var/app/node_modules"]

WORKDIR /var/app

RUN yarn

# CMD yarn && yarn run dev:build
CMD tail -f /var/app/readme.MD

