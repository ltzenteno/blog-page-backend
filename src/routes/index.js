import express from 'express';
import users from './userRoutes';

const router = express.Router();

router.use('/users', users);

export default router;