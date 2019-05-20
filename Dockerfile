# Start from Nginx Alpine 1.13.1
FROM nginx:alpine

# Copy the Web Files
COPY dist /usr/share/nginx/html

# Copy Nginx Conf
COPY conf/nginx.conf /etc/nginx/nginx.conf

# Copy init file
COPY conf/init.sh /usr/local/init.sh

# Run init file on startup
ENTRYPOINT ["/usr/local/init.sh"]

