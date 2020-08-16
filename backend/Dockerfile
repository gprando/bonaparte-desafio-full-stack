FROM debian

RUN apt-get update 

RUN apt-get install -y libaio1 wget unzip gnupg curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get install -y nodejs

RUN wget https://datasets.imdbws.com/title.basics.tsv.gz

RUN gunzip title.basics.tsv.gz 

# RUN wget https://datasets.imdbws.com/title.rating.tsv.gz

# RUN gunzip title.rating.tsv.gz 

RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -

RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -

RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list

RUN apt-get update

RUN apt-get install -y mongodb-org

RUN mongoimport --host=localhost:27017 -d movies -c movies --type tsv --file temp/basic.tsv --headerline

# Define qual diretório será usado para nossa aplicação dentro do container
WORKDIR /usr/src/app

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
CMD [ "node", "./src/server.js" ]


