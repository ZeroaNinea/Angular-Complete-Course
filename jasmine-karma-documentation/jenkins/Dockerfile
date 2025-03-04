FROM jenkins/jenkins:lts

# Switch to root to install packages.
USER root

# Install dependencies and Chrome.
# RUN apt update && apt install -y wget gnupg2 curl \
#     && curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-keyring.gpg \
#     && echo "deb [signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list \
#     && apt update && apt install -y google-chrome-stable \
#     && rm -rf /var/lib/apt/lists/*
RUN apt update && apt install -y wget gnupg2 curl \
    libglib2.0-0 libgconf-2-4 libgtk-3-0 libxss1 libnss3 \
    libasound2 libatk1.0-0 libpangocairo-1.0-0 libpango1.0-0 libcups2 \
    && curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list \
    && apt update && apt install -y google-chrome-stable
    # && rm -rf /var/lib/apt/lists/* # This line makes `apt-get` read-only.

# Add execution permission for all users.
# RUN chmod +x /usr/bin/google-chrome

# Verify that Chrome is installed.
# RUN google-chrome --version

# Ensure Chrome is accessible.
RUN ln -s /usr/bin/google-chrome /usr/local/bin/google-chrome
# RUN ln -s /usr/bin/google-chrome-stable /usr/bin/google-chrome
RUN chmod +x /usr/bin/google-chrome /usr/local/bin/google-chrome
RUN google-chrome --version

# Set environment variable for Chrome.
ENV CHROME_BIN=/usr/bin/google-chrome

# Switch back to Jenkins user.
USER jenkins
