# docker build --tag=blog:latest .




docker run \
--name blog \
-d \
-it --rm \
-v $(pwd):/go/src/www/pengliheng.github.io \
-w /go/src/www/pengliheng.github.io \
-p 80:5000 \
blog:latest