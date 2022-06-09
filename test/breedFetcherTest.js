const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      
      // compare returned description
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns null for description when invalid/non-existent breed passed in', (done) => {
    fetchBreedDescription('Sibeeeeeeeerian', (err, desc) => {
      // expect an error for invalid name
      const expectedErr = 'Breed not found.';
      assert.equal(expectedErr, err);

      // compare returned description
      const expectedDesc = null;
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});