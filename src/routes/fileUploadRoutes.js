import express from 'express';
import env from 'dotenv';
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import {uploadFile} from './../handlers/fileUploadHandler';
import {
  JPG,
  GIF,
  PNG
} from './../util/constants/mimeTypes';

env.config();
const routes = express.Router();

// config S3 bucket
aws.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY,
  secretAccessKey:process.env.AWS_SECRET_KEY
});
// S3 connection implementation
const s3 = new aws.S3();
const bucket = process.env.AWS_S3_BUCKET;
const storageS3 = multerS3({
  s3,
  bucket,
  key:(req, file, next) => {
    next(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({
  storage:storageS3,
  fileFilter:(req, file, next) => {
    if(file.mimetype === JPG || file.mimetype === GIF || file.mimetype === PNG){
      next(null, true);
    }else{
      next(null, false);
    }
  }
});

routes.post('/upload', upload.single('image'), uploadFile);

export default routes;