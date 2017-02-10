FROM mhart/alpine-node:6.3.1

MAINTAINER Daniel Ha (dha@kla-tencor.com)

RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

RUN set -ex;                  \
    npm install -g angular-cli@webpack; \
    npm cache clean;

#RUN useradd --user-group --create-home --shell /bin/false app
#USER app

ENV NODE_ENV development

RUN mkdir -p /home/app
ENV HOME=/home/app
WORKDIR $HOME

EXPOSE 4200

ADD package.json /home/app
RUN npm install

RUN cd $HOME

#ENTRYPOINT ["ng"]

ADD . /home/app
#ENTRYPOINT ["ng"]
CMD ["ng", "serve"]
