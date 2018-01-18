import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name:{type:String, required:true}
},{
  timestamps:true
});

export default mongoose.model('image', ImageSchema);