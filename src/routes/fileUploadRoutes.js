import express from 'express';
import {uploadFile} from './../handlers/fileUploadHandler';
import {upload} from './middleware/aws-s3';

const routes = express.Router();

routes.post('/upload', upload.single('image'), uploadFile);

export default routes;