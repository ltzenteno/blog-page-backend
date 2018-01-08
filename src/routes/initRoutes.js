import express from 'express';
import {createDefaultUser} from './../handlers/initHandler';
const routes = express.Router();

routes.get('/setup', createDefaultUser);

export default routes;
