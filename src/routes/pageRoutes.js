import express from 'express';
import {
  createPage,
  createSlug
} from './../handlers/pageHandler';

const routes = express.Router();

// TODO add auth middleware

routes.post('/', createPage);
routes.post('/slug', createSlug);
routes.get('/:id', () => []);

export default routes;
