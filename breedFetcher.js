// importing the modules for app
const request = require('request');

// parse user input for breed search
const breed = process.argv[2];

// pass user input to search api url
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (e, r, body) => {
  if (e) {
    return console.log(e);
  }
  const data = JSON.parse(body);
  if (Object.keys(data).length === 0) {
    return console.log('no matching breed found');
  }
  console.log(data[0].description);
  console.log(typeof data);
});