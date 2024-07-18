# Make sure to run this from the root of the project
docker-compose -f qiankun/docker-compose.yaml up -d 

# Make sure to rebuild the image if you change the Dockerfile
docker-compose -f qiankun/docker-compose.yaml up -d --build

# Make a shared nexwork between the containers
docker network create my-network

# ssh root@10.88.3.92

```sh
cd /usr/local/src/ranger-storefront-antd-qiankun
```

# nginx
nginx目录 /usr/local/nginx
启动 /etc/init.d/nginx start.    restart.    stop
