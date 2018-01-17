import {expect} from 'chai';
import Page from './../page';
import mongoose from 'mongoose';


async function add(x, y){
   return Promise.resolve(x + y);
}

describe('Page', () => {

  it('2 + 2 is 4', async () => {
    const p = await add(2, 2)
    expect(p).to.equal(4);
  });

  it('3 + 3 is 6', async () => {
    const p = await add(3, 3)
    expect(p).to.equal(6);
  });

  /*
  it('should save a page', async () => {
    const page = {
      title:'My Foo Page!',
      slug:'my-foo-page',
      content:'{}'
    };
    let model;

    try{
      model = await Page.create(page);
      expect(model).to.be.a('object');
    }catch(err){
      console.log(err);
    }
  });
  */
});
