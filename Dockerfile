FROM nginx:1.15.8-alpine

LABEL version="1.0.0"

ENV REFRESHED_AT=2019-12-02-1

docker-compose -f src/main/docker/app.yml up -d
