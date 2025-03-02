FROM jenkins/jenkins:lts

# Switch to root to install packages.
USER root

# Install basic dependencies (if needed).
RUN apt update && apt install -y wget gnupg2 curl && rm -rf /var/lib/apt/lists/*

# Switch back to Jenkins user.
USER jenkins

