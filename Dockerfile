FROM alpine:latest as builder
RUN apk add --update gettext


FROM nstupak/node-git as appBuilder
RUN mkdir /work
WORKDIR /work
ADD . .
RUN npm install && npm run build


FROM nginx:alpine
ENV LISTEN_PORT=3000 \
  SERVER_NAME=localhost \
  UPSTREAM=localhost:8080 \
  UPSTREAM_PROTO=http \
  ESC=$
COPY --from=builder /usr/bin/envsubst /usr/local/bin/envsubst
COPY --from=appBuilder /work/dist /etc/nginx/html
VOLUME ["/etc/nginx/nginx.tmpl"]

CMD /bin/sh -c "envsubst < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf" && nginx -g 'daemon off;'
