// importing the modules for app
const { fetchBreedDescription } =  require('./breedFetcher');

// parse user input for breed search
const breed = process.argv[2];

// call the function
fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    console.log(desc);
  }
});