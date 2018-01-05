import express from 'express';
import {
  createUser,
  fetchUsers
} from "../handlers/userHandler";

const routes = express.Router();

routes.get('/setup', createUser);
routes.get('/', fetchUsers);

export default routes;