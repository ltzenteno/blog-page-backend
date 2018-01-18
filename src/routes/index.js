import express from 'express';
import init from './initRoutes';
import users from './userRoutes';
import auth from './authRoutes';
import fileUpload from './fileUploadRoutes';

const router = express.Router();

router.use('/', init);
router.use('/users', users);
router.use('/authenticate', auth);
router.use('/', fileUpload);

export default router;