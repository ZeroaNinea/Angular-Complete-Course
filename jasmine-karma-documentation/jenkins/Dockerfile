FROM jenkins/jenkins:lts

# Switch to root to install packages.
USER root

# Install Chrome and other dependencies.
RUN apt update && apt install -y google-chrome-stable

# Switch back to Jenkins user.
USER jenkins
