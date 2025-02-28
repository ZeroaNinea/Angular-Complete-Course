FROM jenkins/jenkins:lts

# Switch to root to install packages.
USER root

# Install dependencies and Chrome.
RUN apt update && apt install -y wget gnupg2 curl \
    && curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list \
    && apt update && apt install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Verify that Chrome is installed.
RUN google-chrome --version

# Set environment variable for Chrome.
ENV CHROME_BIN=/usr/bin/google-chrome

# Switch back to Jenkins user.
USER jenkins
