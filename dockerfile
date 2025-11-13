FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o arquivo do projeto para dentro do container
COPY app.js .

# Define o comando a ser executado quando o container iniciar
CMD ["node", "app.js"]