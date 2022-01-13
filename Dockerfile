FROM node:16.6.1

WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN react-scripts build
RUN npm install -g serve

#TAEFIK CONFIG
LABEL traefik.enable="true" \
      traefik.http.routers.ge-web.entrypoints="websecure" \
      traefik.http.routers.ge-web.rule="Host(`fluechtlingsbewegung.tk`)" \
      traefik.port="80" \
      traefik.http.routers.ge-web.tls.certresolver="letsencrypt"

EXPOSE 80

CMD serve -s build -l 80
