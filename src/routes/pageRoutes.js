import express from 'express';
import {createPage} from './../handlers/pageHandler';

const routes = express.Router();

// TODO add auth middleware

routes.post('/', createPage);
routes.get('/:id', () => []);

export default routes;
