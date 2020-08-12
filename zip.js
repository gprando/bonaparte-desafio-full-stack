const { createWriteStream } = require('fs');
const axios = require('axios');

const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();

const baixar = (url) => {
  return new Promise((resolver) => {
    const partes = url.split('/');
    const arquivo = createWriteStream(partes[partes.length - 1]);

    axios.get(url, (resposta) => {
      // const stream = resposta.pipe(arquivo);
      // const r = fs.createReadStream('./demofile.txt');
      resposta.pipe(gzip).pipe(arquivo);

      // stream.on('finish', resolver);
    });
  });
};

baixar('https://datasets.imdbws.com/title.ratings.tsv.gz');
