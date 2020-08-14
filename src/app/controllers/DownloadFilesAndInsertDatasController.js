// import Movie from '../schemas/Movie';

import { createGunzip } from 'zlib';
import fs from 'fs';
import readline from 'readline';
import { tsv } from 'd3';

import downloadFile from '../utils/downloadFile';

class DownloadFilesAndInsertDatasController {
  async store(request, response) {
    // const gunzip = createGunzip();

    // await downloadFile(
    //   'https://datasets.imdbws.com/title.ratings.tsv.gz',
    //   './temp/rating.tsv.gz'
    // );
    // const inputFile = fs.createReadStream('./temp/rating.tsv.gz');
    // const output = fs.createWriteStream('./temp/rating.tsv');

    // await inputFile.pipe(gunzip).pipe(output);

    // await downloadFile(
    //   'https://datasets.imdbws.com/title.basics.tsv.gz',
    //   './temp/basic.tsv.gz'
    // );
    // const inFile = fs.createReadStream('./temp/basic.tsv.gz');
    // const out = fs.createWriteStream('./temp/basic.tsv');

    // await inFile.pipe(gunzip).pipe(out);

    // const file = fs.createReadStream('./temp/basic.tsv');

    // tsv('./temp/basic.tsv', (data) => {
    //   for (let i = 0; i < data.length; i++) {
    //     console.log(data[i]);
    //   }
    // });

    // const file = 'sam     tory	22;raj	kumar	24';
    // const json = file.split(';').map((profile) => {
    //   const p = profile.split('\t');
    //   return {
    //     Fname: p[0],
    //     lastname: p[1],
    //     Age: p[2],
    //   };
    // });
    // console.log(json);

    const file = fs.createReadStream('./temp/basic.tsv');
    const jso = fs.createWriteStream('./temp/basic.json');

    const json = [];

    const fl = readline.createInterface({
      input: file,
      output: jso,
    });

    const a = fl.on('line', (line) => {
      const p = line.split('\t');

      json.push({
        tconst: p[0],
      });

      return {
        tconst: p[0],
      };
    });
    console.log(json);

    // console.log(vet);

    return response.json(json);
  }
}

export default new DownloadFilesAndInsertDatasController();
