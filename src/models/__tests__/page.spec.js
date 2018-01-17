import env from 'dotenv';
import {expect} from 'chai';
import Page from './../page';
import mongoose from 'mongoose';

env.config();

describe('Page', () => {

  // before starting the test, create a sandboxed db connection
  // once a connection is established, invoke done()
  before(done => {
    mongoose.connect(process.env.DB);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('test connected to db');
      done();
    });
  });

  // after all tests are finished, close database connection
  after(done => {
    mongoose.connection.close(done);
  });

  it('should save a page', done => {
    const page = new Page({
      title:'My Foo Page!',
      slug:'my-foo-page',
      content:{p:'lorem ipsum...'}
    });
    page.save(done);
  });
});
