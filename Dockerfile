FROM node:8

RUN sudo apt-get update && \
    sudo apt-get install -y python-pip python-dev apt-transport-https gettext && \
    sudo pip install awscli

RUN sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add - && \
    echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list && \
    sudo apt-get update && \
    sudo apt-get install -y kubectl

RUN sudo curl -o /usr/bin/aws-iam-authenticator https://amazon-eks.s3-us-west-2.amazonaws.com/1.10.3/2018-07-26/bin/linux/amd64/aws-iam-authenticator && \
    sudo chmod +x /usr/bin/aws-iam-authenticator

RUN aws --version

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]