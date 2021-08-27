const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  if (typeof breedName !== `string`) {
    return callback(null, `provide a valid breed name`);
  }
	
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (e, r, body) => {
    if (e) {
      return callback(e, null);
    }
    const data = JSON.parse(body);
    if (Object.keys(data).length === 0) {
      return callback(`no matching breed found`, null);
    }
    callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};
