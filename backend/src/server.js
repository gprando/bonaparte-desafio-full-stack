import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

const app = express();

mongoose.connect('mongodb://localhost:27017/imdbData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
