# Make sure to run this from the root of the project
docker-compose -f qiankun/docker-compose.yaml up -d 

# Make sure to rebuild the image if you change the Dockerfile
docker-compose -f qiankun/docker-compose.yaml up -d --build

# Make a shared nexwork between the containers
docker network create my-network

# ssh root@10.88.3.92

```bash
cd /usr/local/src/ranger-storefront-antd-qiankun
```

# nginx
nginx目录 /usr/local/nginx
启动 /etc/init.d/nginx start.    restart.    stop
nginx html: /usr/local/nginx/html
config file: /usr/local/nginx/conf/vhost/server.conf

# Copy File
```bash
cp -r /usr/local/src/ranger-storefront-antd-qiankun/apps/ranger-main/build/ /usr/local/nginx/html

cp -r /usr/local/src/ranger-storefront-antd-qiankun/apps/ranger-qms/build/ /usr/local/nginx/html/oim/qms


cp -r /usr/local/src/ranger-storefront-antd-qiankun/apps/ranger-srm/build/ /usr/local/nginx/html/oim/srm

cp -r /usr/local/src/ranger-storefront-antd-qiankun/apps/ranger-wms/build/ /usr/local/nginx/html/oim/wms
```
