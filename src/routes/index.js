import express from 'express';
import init from './initRoutes';
import users from './userRoutes';
import auth from './authRoutes';
import fileUpload from './fileUploadRoutes';
import pages from './pageRoutes';

const router = express.Router();

router.use('/', init);
router.use('/users', users);
router.use('/authenticate', auth);
router.use('/', fileUpload);
router.use('/page', pages);

export default router;