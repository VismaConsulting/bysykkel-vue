FROM circleci/node:8.12.0
LABEL description="image for aws cli og node"

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
RUN aws-iam-authenticator help
