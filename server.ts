import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge', { useNewUrlParser: true });

app.listen(port, function() {
  console.log('serve connected');
});
