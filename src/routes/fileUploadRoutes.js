import express from 'express';
import multer from 'multer';
import {uploadFile} from './../handlers/fileUploadHandler';

const routes = express.Router();

// TODO: replace local dir for S3 bucket
const storage = multer.diskStorage({
  destination:(req, file, next) => {
    next(null, 'uploads/');
  },
  filename:(req, file, next) => {
    next(null, `${Date.now()}_${file.originalname}`)
  }
});

const upload = multer({
  storage
});

routes.post('/upload', upload.single('image'), uploadFile);

export default routes;