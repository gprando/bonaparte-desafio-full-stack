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


// certo !

const { createWriteStream } = require('fs');
const axios = require('axios');
const fs = require('fs')
const zlib = require('zlib')

const gunzip = zlib.createGunzip()



async function downloadFile(fileUrl, outputLocationPath) {
  const writer = createWriteStream(outputLocationPath);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream',
  }).then(response => {

    //ensure that the user can call `then()` only when the file has
    //been downloaded entirely.

    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error = null;
      writer.on('error', err => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on('close', () => {
        if (!error) {
          resolve(true);
        }
        //no need to call the reject here, as it will have been called in the
        //'error' stream;
    
      });
    });
  });
}

downloadFile('https://datasets.imdbws.com/title.basics.tsv.gz', './data.tsv.gz').then(res=>{
  const inFile = fs.createReadStream('./data.tsv.gz')
  const out = fs.createWriteStream('./data.tsv');

  inFile.pipe(gunzip).pipe(out)
})

