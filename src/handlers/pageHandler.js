import Page from './../models/page';
import {
  slugify,
  tryParseJSON
} from './../util/helpers';

export const createPage = async (req, res) => {
  const { title, slug, content, mainMedia, publishedAt } = req.body;

  // validate that the slug does not exist already
  const repeatedSlug = await Page.findOne({slug});
  if(repeatedSlug){
    res.status(400).send({
      message:'The provided slug already exists.',
      slug
    });
    return;
  }

  const jsonContent = tryParseJSON(content);
  const jsonMainMedia = tryParseJSON(mainMedia);

  // if content is invalid, send bad request
  if(!jsonContent){
    res.status(400).send({
      message:'Content must be a valid stringified JSON.'
    });
    return;
  }

  const page = new Page({
    title,
    slug,
    content:jsonContent,
    mainMedia:(jsonMainMedia !== false) ? jsonMainMedia : null,
    publishedAt:(publishedAt !== undefined) ? publishedAt : null
  });

  try{
    const data = await page.save();
    res.json({
      message:'page created successfully.',
      data
    });
  }catch(err){
    res.status(500).send({
      message:err
    });
  }
};

export const createSlug = async (req, res) => {
  const {text} = req.body;
  const slug = slugify(text);

  res.json({
    message:'Text slugified.',
    slug
  });
};