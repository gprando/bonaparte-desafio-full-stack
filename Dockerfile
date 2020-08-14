FROM node:slim

RUN apt-get update && apt-get install -y libaio1 wget unzip

WORKDIR /opt/oracle

RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
    unzip instantclient-basiclite-linuxx64.zip && rm -f instantclient-basiclite-linuxx64.zip && \
    cd /opt/oracle/instantclient* && rm -f *jdbc* *occi* *mysql* *mql1* *ipc1* *jar uidrvci genezi adrci && \
    echo /opt/oracle/instantclient* > /etc/ld.so.conf.d/oracle-instantclient.conf && ldconfig

# Define qual diretório será usado para nossa aplicação dentro do container
WORKDIR /usr/src/app

ENV DB_HOST=default 
ENV DB_USER=default 
ENV DB_PASS=default 

# Copia todos os arquivos que começam com package e tem extensão .json para o diretório definido acima
COPY package*.json ./

# Instala todas as dependências declaradas no package.json
RUN npm install

# Copia todos os arquivos da raiz da nossa aplicação para a pasta deinida no WORKDIR
COPY . .

RUN rm -rf /var/cache/apt/archives.
RUN apt-get clean
RUN apt-get remove --purge -y wget unzip

# Expõe a porta
EXPOSE 3333

# Roda a aplicação
CMD [ "node", "./src/app.js" ]


