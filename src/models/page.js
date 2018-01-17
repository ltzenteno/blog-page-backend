import mongoose from 'mongoose';
/*
 * page.js
 * a page object contains the needed properties for a blog post.
 */
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  title:{type:String, required:true},
  slug:{type:String, required:true},
  content:{type:Object, required:true},
  mainMedia:{type:Object, required:false},
  publishedAt:{type:Date, required:false}
},{
  timestamps:true
});

export default mongoose.model('page', PageSchema);

