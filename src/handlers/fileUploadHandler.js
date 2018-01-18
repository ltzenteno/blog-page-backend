export const uploadFile = (req, res, next) => {
  // req.file:
  /* example output:
            { fieldname: 'image',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
  for(let key in req.file){
    console.log(`${key} : ${req.file[key]}`);
  }
  res.json({
    message:'success'
  });
};