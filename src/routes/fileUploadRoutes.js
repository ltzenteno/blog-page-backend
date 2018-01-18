import express from 'express';
import multer from 'multer';
import {uploadFile} from './../handlers/fileUploadHandler';
import {
  JPG,
  GIF,
  PNG
} from './../util/constants/mimeTypes';

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
  storage,
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