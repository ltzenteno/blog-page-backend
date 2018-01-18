export const uploadFile = (req, res, next) => {
  // TODO: delete this console.log
  for(let key in req.file){
    console.log(`${key} : ${req.file[key]}`);
  }

  if(req.file === undefined) {
    res.status(400).send({
      message: 'file not supported, you can only upload JPG, GIF or PNG files.'
    });
  }else{
    res.json({
      message:'file uploaded successfully.',
      name:req.file.filename
    });
  }
};