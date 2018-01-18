import Image from './../models/image';

export const uploadFile = async (req, res, next) => {
  // TODO: delete this console.log
  for(let key in req.file){
    console.log(`${key} : ${req.file[key]}`);
  }

  if(req.file === undefined) {
    res.status(400).send({
      message: 'file not supported, you can only upload JPG, GIF or PNG files.'
    });
  }else{

    const image = new Image({
      name:req.file.filename
    });

    try{
      const data = await image.save();
      res.json({
        message:'file uploaded successfully.',
        name:data.name
      });
    }catch(err){
      res.status(500).send({
        message:err
      });
    }



  }
};