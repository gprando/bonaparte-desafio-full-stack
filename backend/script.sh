
wget https://datasets.imdbws.com/title.basics.tsv.gz

gunzip title.basics.tsv.gz 

wget https://datasets.imdbws.com/title.rating.tsv.gz

gunzip title.rating.tsv.gz 

wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

sudo apt-get install gnupg

wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt-get update

sudo apt-get install -y mongodb-org


mongoimport --host=localhost:27017 -d movies -c movies --type tsv --file temp/basic.tsv --headerline