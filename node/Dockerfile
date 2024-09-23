# Usar a imagem base do Node.js versão 20
FROM node:20

# Definir ambiente como produção
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Definir a porta padrão do Expo
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002 8081

# Instalar pacotes globais, como o Expo CLI
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH

# Instalar dependências do OpenJDK e ferramentas do Android
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    wget \
    unzip \
    usbutils \
    adb \
    && apt-get clean

# Baixar e instalar Android Command Line Tools
RUN mkdir -p /opt/android-sdk && \
    cd /opt/android-sdk && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-6609375_latest.zip && \
    unzip commandlinetools-linux-6609375_latest.zip -d cmdline-tools && \
    rm commandlinetools-linux-6609375_latest.zip

# Configurar variáveis de ambiente para o SDK do Android
ENV ANDROID_SDK_ROOT=/usr/lib/android-sdk
ENV PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools


# Instalar ngrok
RUN npm install -g @expo/ngrok@^4.1.0

WORKDIR /app/react-native

# Instalar dependências do Node.js
COPY ./app/react-native/package.json ./app/react-native/package-lock.json ./
RUN npm install


# Definir o ponto de entrada e comando para rodar o Expo
ENTRYPOINT ["npm", "run"]
CMD ["start"]
