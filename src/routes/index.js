import express from 'express';
import users from './userRoutes';
import auth from './authRoutes';

const router = express.Router();

router.use('/users', users);
router.use('/authenticate', auth);

export default router;