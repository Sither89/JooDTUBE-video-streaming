#!/bin/sh

#Update
yum update -y

#Configure the package management system (yum)
touch mongodb-org-6.0.repo
echo "[mongodb-org-6.0]" >> mongodb-org-6.0.repo
echo "name=MongoDB Repository" >> mongodb-org-6.0.repo
echo "baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/6.0/x86_64/" >> mongodb-org-6.0.repo
echo "gpgcheck=1" >> mongodb-org-6.0.repo
echo "enabled=1" >> mongodb-org-6.0.repo
echo "gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc" >> mongodb-org-6.0.repo
mv mongodb-org-6.0.repo /etc/yum.repos.d/


#Install the MongoDB packages
yum install -y mongodb-org

#Start MongoDB.
systemctl start mongod

#Verify that MongoDB has started successfully.
systemctl status mongod

 
#Install git in your EC2 instance
yum install git -y

#install node.js in EC2
yum install gcc-c++ make -y
curl -sL https://rpm.nodesource.com/setup_16.x | bash
yum install nodejs -y

# Install the web 
git clone https://github.com/Sither89/JooDTUBE-video-streaming.git
cd JooDTUBE-video-streaming
npm install
node setupDB.js


#Start web server
npm start