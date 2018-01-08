import express from 'express';
import verifyToken from './middleware';
import {
  fetchUsers
} from '../handlers/userHandler';

const routes = express.Router();

// implement jwt token verification middleware
routes.use(verifyToken);

routes.get('/', fetchUsers);

export default routes;