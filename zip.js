// certo !

const { createWriteStream } = require('fs');
const axios = require('axios');
const fs = require('fs');
const zlib = require('zlib');

const gunzip = zlib.createGunzip();

async function downloadFile(fileUrl, outputLocationPath) {
  const writer = createWriteStream(outputLocationPath);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream',
  }).then((response) => {
    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error = null;
      writer.on('error', (err) => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on('close', () => {
        if (!error) {
          resolve(true);
        }
      });
    });
  });
}

downloadFile(
  'https://datasets.imdbws.com/title.basics.tsv.gz',
  './data.tsv.gz'
).then(() => {
  const inFile = fs.createReadStream('./data.tsv.gz');
  const out = fs.createWriteStream('./data.tsv');

  inFile.pipe(gunzip).pipe(out);
});

// const partes = url.split('/');
// const arquivo = createWriteStream(partes[partes.length - 1]);
