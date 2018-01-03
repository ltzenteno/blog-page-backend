import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from './models/config';
import User from './models/user';

const app = express();

const port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and / or URL parameters
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// use morgan to log requests to console
app.use(morgan('dev'));


app.get('/', (requuest, response) => {
  response.send('hallo!');
});

app.listen(port);
