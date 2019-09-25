const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('app module', () => {
  describe('GET /movie', () => {
    it('Should return an array of movies', () => {
      return supertest(app)
        .get('/movie')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
        });
    });
    it('should sort by genre', () => {
      return supertest(app)
        .get('/movie')
        .query({ sort: 'genre' })
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          let sorted = true;

          let i = 0;
          // iterate once less than the length of the array
          // because we're comparing 2 items in the array at a time
          while (i < res.body.length - 1) {
            // compare book at `i` with next book at `i + 1`
            const movieAtI = res.body[i];
            const movieAtIPlus1 = res.body[i + 1];
            // if the next book is less than the book at i,
            if (movieAtIPlus1.title < movieAtI.title) {
              // the books were not sorted correctly
              sorted = false;
              break; // exit the loop
            }
            i++;
          }
          expect(sorted).to.be.true;
        });
    });
    it('should sort by country', () => {
      return supertest(app)
        .get('/movie')
        .query({ sort: 'country' })
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          let sorted = true;

          let i = 0;
          // iterate once less than the length of the array
          // because we're comparing 2 items in the array at a time
          while (i < res.body.length - 1) {
            // compare book at `i` with next book at `i + 1`
            const movieAtI = res.body[i];
            const movieAtIPlus1 = res.body[i + 1];
            // if the next book is less than the book at i,
            if (movieAtIPlus1.title < movieAtI.title) {
              // the books were not sorted correctly
              sorted = false;
              break; // exit the loop
            }
            i++;
          }
          expect(sorted).to.be.true;
        });
    });
    it('should sort by avg_vote', () => {
      return supertest(app)
        .get('/movie')
        .query({ sort: 'avg_vote' })
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          let sorted = true;

          let i = 0;
          // iterate once less than the length of the array
          // because we're comparing 2 items in the array at a time
          while (i < res.body.length - 1) {
            // compare book at `i` with next book at `i + 1`
            const movieAtI = res.body[i];
            const movieAtIPlus1 = res.body[i + 1];
            // if the next book is less than the book at i,
            if (movieAtIPlus1.title < movieAtI.title) {
              // the books were not sorted correctly
              sorted = false;
              break; // exit the loop
            }
            i++;
          }
          expect(sorted).to.be.true;
        });
    });
  });
});
