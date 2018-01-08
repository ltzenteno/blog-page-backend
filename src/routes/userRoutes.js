import express from 'express';
import verifyToken from './middleware';
import {
  createUser,
  fetchUsers
} from "../handlers/userHandler";

const routes = express.Router();

// implement jwt token verification middleware
routes.use(verifyToken);

routes.get('/setup', createUser);
routes.get('/', fetchUsers);

export default routes;