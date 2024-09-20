FROM ubuntu:16.04

# Instalar dependências básicas
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    apt-get install -y git

# Copiar o código do app para o diretório correto
COPY ./app/react-native /react-native/

# Definir o diretório de trabalho
WORKDIR /react-native

# Instalar as dependências do projeto
RUN npm install && npm install -g expo-cli

# Comando para iniciar o app
CMD [ "npm", "start" ]
