let chai = require('chai');
let getBooks = require('../utils/googlebooks');
let expect = chai.expect;
let patt = /turing/i;

//Our parent block
describe('Test Async Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        done();
    });

    it('should return an object with list books with turing in the title', function(done) {
        getBooks('turing').then((result) => {
            let books = JSON.parse(result);
            expect(books).to.be.an('object');
            expect(books.items).to.satisfy(function(items) {
                return items.every(function(item) {
                    return patt.test(item.volumeInfo.title);
                });
            });
           done();
        }).catch(err => done(err));
    });

    it('should return an error with list books with "" in the title', function(done) {
        getBooks('').then((result) => {
            console.log(result);
            let books = JSON.parse(result);
            expect(books).to.be.an('object');
            done();
        }).catch(err => {
                //expect(err.response).to.have.status(400);
                expect(err.response.status).to.be.equal(400);
                done();
        });
    });
});