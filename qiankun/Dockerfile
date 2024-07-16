# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./qiankun/nginx/default.conf /etc/nginx/conf.d/

# Copu application build static files to nginx default files
COPY ../apps/ranger-main/build /usr/share/nginx/html
COPY ../apps/ranger-qms/build /usr/share/nginx/html/oim/qms
COPY ../apps/ranger-srm/build /usr/share/nginx/html/oim/srm
COPY ../apps/ranger-wms/build /usr/share/nginx/html/oim/wms

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]
