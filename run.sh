docker run \
-it \
-rm \
--name blog \
-p 8001:5000 \
-w /root/app \
blog:latest
.