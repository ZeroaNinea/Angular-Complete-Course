FROM jenkins/jenkins:lts

# Switch to root to install packages.
USER root

# Install dependencies and Chrome.
RUN apt update && apt install -y wget gnupg \
    && wget -qO - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list \
    && apt update && apt install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Ensure Google Chrome is installed.
RUN google-chrome --version

# Switch back to Jenkins user.
USER jenkins
