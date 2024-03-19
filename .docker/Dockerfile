ARG IMAGE_VERSION=2.0.1-npm
FROM yuridefranca/php:${IMAGE_VERSION}

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]