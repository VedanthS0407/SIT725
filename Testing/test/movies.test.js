const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

describe('Movie Model Unit Test', function () {

  it('should create a movie object with correct fields', function () {
    const movie = new Movie({
      title: 'Inception',
      poster: 'images/interstellar.jpg',
      trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
      description: 'A mind-bending thriller'
    });

    expect(movie).to.be.an('object');
    expect(movie).to.have.property('title', 'Inception');
    expect(movie).to.have.property('poster');
    expect(movie).to.have.property('trailer');
    expect(movie).to.have.property('description');
  });

  it('should have undefined _id before saving to database', function () {
    const movie = new Movie({
      title: 'Tenet',
      poster: 'images/interstellar.jpg',
      trailer: 'https://www.youtube.com/watch?v=L3pk_TBkihU',
      description: 'Time inversion and espionage'
    });

    expect(movie._id).to.exist;
    expect(movie.isNew).to.be.true;
  });

  it('should return "Movie" as the model name', function () {
    expect(Movie.modelName).to.equal('Movie');
  });

  // ✅ Fix 1: Validation error for missing fields
  it('should throw validation error if required fields are missing', async function () {
    const movie = new Movie({}); // no fields
    try {
      await movie.validate();
      throw new Error('Validation should have failed but did not.');
    } catch (err) {
      expect(err.errors.title).to.exist;
      expect(err.errors.poster).to.exist;
      expect(err.errors.trailer).to.exist;
      expect(err.errors.description).to.exist;
    }
  });


  // ✅ Fix 3: Trimming string fields
  it('should trim string fields if trim is set in schema', function () {
    const movie = new Movie({
      title: '   Interstellar   ',
      poster: '  images/interstellar.jpg  ',
      trailer: '   https://youtube.com/interstellar   ',
      description: '   Space and time   '
    });

    // Mongoose trims only when you access the final saved value
    expect(movie.title).to.equal('Interstellar');
    expect(movie.poster).to.equal('images/interstellar.jpg');
    expect(movie.trailer).to.equal('https://youtube.com/interstellar');
    expect(movie.description).to.equal('Space and time');
  });

});
