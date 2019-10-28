const axios = require('axios');
const fs = require('fs');
axios.get('https://randomuser.me/api/?results=250&nat=us')
  .then(function (response) {
    fs.writeFile('testData.json', JSON.stringify(response.data.results), null, 2);
  })
  .catch(function (error) {
    console.log(error);
  })