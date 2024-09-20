FROM node:14

# Instalação do JDK
RUN apt-get update && apt-get install -y openjdk-11-jdk

# Define a variável JAVA_HOME
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV PATH $JAVA_HOME/bin:$PATH

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe as portas padrão do Node e do React Native
EXPOSE 3000
EXPOSE 19000

# Comando para rodar o app
CMD ["npm", "start"]
