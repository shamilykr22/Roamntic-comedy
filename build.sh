#!/bin/bash

set -o pipefail

cd ..

echo Installing dependencies ...
npm install

echo Building production app ...
npm run build-production

echo Copying latest production app to build folder
rm -rf build/dist
cp -R dist build/dist

cd build

IMAGE=${PROJECT}
VERSION=latest
BUILD_LOG=build.log


echo Building custom ${PROJECT} image.
sudo docker build -t ${IMAGE}:${VERSION} . | tee ${BUILD_LOG} || exit 1

echo Removing production app from build folder after building docker image
rm -rf build/dist
