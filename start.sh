#!/bin/bash

set -o pipefail

echo Starting App  ...

echo Running Latest docker image.

sudo docker run -it --name project-app -d -p 8444:80 project-app:latest "http:\/\/ec2-52-31-132-254.eu-west-1.compute.amazonaws.com\/appServer"
