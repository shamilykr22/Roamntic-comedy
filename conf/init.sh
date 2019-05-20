#!/bin/sh
# Replace Project API endpoint with the one specified in run
# service nginx stop
${PROJECT}_API_ENDPOINT_PARAM=$1
echo ${PROJECT}_API_ENDPOINT_PARAM
sed -i s/${PROJECT}_API_ENDPOINT/${PROJECT}_API_ENDPOINT_PARAM/g /etc/nginx/nginx.conf


nginx -g 'daemon off;'
