import express from 'express';
import {authenticate} from './../handlers/authHandler';

const routes = express.Router();

routes.post('/', authenticate);

export default routes;