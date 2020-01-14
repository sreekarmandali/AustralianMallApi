
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var assert = chai.assert;




chai.use(chaiHttp);
chai.should();
describe("Ratings", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all ratings record", (done) => {
            chai.request(app)
                .get('/ratings/getReviews')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body.length, 1);
                    done();
                });
        });
        // Test to get single student record

        describe("POST /", () => {
            it("should  add a single review record", (done) => {

                chai.request(app)
                    .post('/ratings/addReview/')
                    .send({ "userName": "KUMAR", "rating": 5, "reviewComment": "It was a great View" })
                    .end((err, res) => {
                        res.should.have.status(201);
                        assert(res.body.message, 'Successfully added a new review.');
                        done();
                    });
            });

        });
    });
})