export const tryParseJSON = jsonString => {
  try{
    const o = JSON.parse(jsonString);
    if(o && typeof o === 'object'){
      return o;
    }
  }catch(err){}

  return false;
};

/**
 * Function that creates a slug based on a text
 * @param text
 * @returns {string}
 */
export const slugify = text => {
  text = text.toString().toLowerCase();
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to   = 'aaaaeeeeiiiioooouuuunc------';

  for(let i=0, l=from.length; i<l; i++){
    text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  return text.trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
};