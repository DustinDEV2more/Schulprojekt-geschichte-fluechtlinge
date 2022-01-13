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
      traefik.http.routers.ge-web-v.entrypoints="websecure" \
      traefik.http.routers.ge-web-v.rule="Host(`fluechtlingsbewegung.tk`) && PathPrefix(`/vortrag`)" \
      traefik.http.middlewares.ge-web-v-stripprefix.stripprefix.prefixes="/vortrag" \
      traefik.http.routers.ge-web-v.middlewares="ge-web-v-stripprefix" \
      traefik.port="80" \
      traefik.http.routers.ge-web-v.tls.certresolver="letsencrypt"

EXPOSE 80

CMD serve -s build -l 80
