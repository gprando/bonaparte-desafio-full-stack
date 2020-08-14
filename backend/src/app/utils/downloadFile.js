const { createWriteStream } = require('fs');
const axios = require('axios');

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
  './basic.tsv.gz'
);

downloadFile(
  'https://datasets.imdbws.com/title.rating.tsv.gz',
  './rating.tsv.gz'
);
