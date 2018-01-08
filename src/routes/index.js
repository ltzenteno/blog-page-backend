import express from 'express';
import init from './initRoutes';
import users from './userRoutes';
import auth from './authRoutes';

const router = express.Router();

router.use('/', init);
router.use('/users', users);
router.use('/authenticate', auth);

export default router;