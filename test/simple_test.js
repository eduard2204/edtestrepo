//simple_test.js
const axios = require('axios');

describe('My first test pack', function(){
  it('My first test case', async function() {
    await axios('https://allwebstuff.info/');
  });
});