import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import routes from './routes';
import env from 'dotenv';

env.config();
const app = express();

const port = process.env.PORT || 8080;
mongoose.connect(process.env.DB);

// use body parser so we can get info from POST and / or URL parameters
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// use morgan to log requests to console
app.use(morgan('dev'));

// API Routes
app.get('/', (request, response) => {
  response.send('hallo!');
});

// route to show random message
routes.get('/', (req, res) => {
  res.json({
    message:'This is my API!'
  });
});

app.use('/api', routes);

app.listen(port);
