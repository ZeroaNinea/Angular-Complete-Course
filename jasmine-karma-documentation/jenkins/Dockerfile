FROM jenkins/jenkins:lts

# Switch to root to install packages.
USER root

# Install dependencies
RUN apt update && apt install -y wget gnupg2 curl

# Add Google Chrome’s signing key correctly
RUN curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-keyring.gpg

# Add the Chrome repository with the correct key
RUN echo "deb [signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list

# Update and install Google Chrome
RUN apt update && apt install -y google-chrome-stable
