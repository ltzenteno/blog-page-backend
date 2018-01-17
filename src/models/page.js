import mongoose from 'mongoose';
/*
 * page.js
 * a page object contains the needed properties for a blog post.
 */
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  title:String,
  slug:String,
  content:String,
  mainMedia:String,
  publishedAt:Date
},{
  timestamps:true
});

export default mongoose.model('page', PageSchema);

