import env from 'dotenv';
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import {
  JPG,
  PNG,
  GIF
} from './../../util/constants/mimeTypes';

/**
 * Defines AWS S3 middleware to upload image files directly to a S3 bucket
 */

env.config();
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
    // sets custom filename with date ts and original filename
    next(null, `${Date.now()}_${file.originalname}`);
  }
});

export const upload = multer({
  storage:storageS3,
  fileFilter:(req, file, next) => {
    if(file.mimetype === JPG || file.mimetype === GIF || file.mimetype === PNG){
      next(null, true);
    }else{
      next(null, false);
    }
  }
});