// import Movie from '../schemas/Movie';

import { createGunzip } from 'zlib';
import fs from 'fs';

import downloadFile from '../utils/downloadFile';

class DownloadFilesAndInsertDatasController {
  async store(request, response) {
    const gunzip = createGunzip();

    // await downloadFile(
    //   'https://datasets.imdbws.com/title.basics.tsv.gz',
    //   './temp/basic.tsv.gz'
    // ).then(async () => {
    //   const inFile = fs.createReadStream('./temp/basic.tsv.gz');
    //   const out = fs.createWriteStream('./temp/basic.tsv');

    //   await inFile.pipe(gunzip).pipe(out);
    // });

    // await downloadFile(
    //   'https://datasets.imdbws.com/title.ratings.tsv.gz',
    //   './temp/rating.tsv.gz'
    // ).then(async () => {
    //   const inputFile = fs.createReadStream('./temp/rating.tsv.gz');
    //   const output = fs.createWriteStream('./temp/rating.tsv');

    //   await inputFile.pipe(gunzip).pipe(output);
    // });

    // await downloadFile(
    //   'https://datasets.imdbws.com/title.basics.tsv.gz',
    //   './temp/basic.tsv.gz'
    // );
    // const inFile = fs.createReadStream('./temp/basic.tsv.gz');
    // const out = fs.createWriteStream('./temp/basic.tsv');

    // inFile.pipe(gunzip).pipe(out);

    await downloadFile(
      'https://datasets.imdbws.com/title.ratings.tsv.gz',
      './temp/rating.tsv.gz'
    );
    const inputFile = fs.createReadStream('./temp/rating.tsv.gz');
    const output = fs.createWriteStream('./temp/rating.tsv');

    inputFile.pipe(gunzip).pipe(output);

    return response.json({ ok: true });
  }
}

export default new DownloadFilesAndInsertDatasController();
