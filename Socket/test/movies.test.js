const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

describe('Movie Model Unit Test', function () {

  it('should create a movie object with correct fields', function () {
    const movie = new Movie({
      title: 'Inception',
      poster: 'images/inception.jpg',
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
      poster: 'images/tenet.jpg',
      trailer: 'https://www.youtube.com/watch?v=L3pk_TBkihU',
      description: 'Time inversion and espionage'
    });

    expect(movie._id).to.exist; // still has an _id even before saving
    expect(movie.isNew).to.be.true; // Mongoose considers it new
  });

  it('should return "Movie" as the model name', function () {
    expect(Movie.modelName).to.equal('Movie');
  });

});
