FROM node:18

RUN curl -L -o /usr/bin/jq https://github.com/jqlang/jq/releases/download/jq-1.6/jq-linux64 \
    && chmod +x /usr/bin/jq
