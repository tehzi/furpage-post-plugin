FROM postgres:14-alpine

ADD ./init-user-db.sh /docker-entrypoint-initdb.d/init-user-db.sh

RUN apk add --no-cache --virtual .virtual dos2unix \
    && dos2unix /docker-entrypoint-initdb.d/init-user-db.sh \
    && apk del .virtual
