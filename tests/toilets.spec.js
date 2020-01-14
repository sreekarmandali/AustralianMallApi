
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var assert = chai.assert;




chai.use(chaiHttp);
chai.should();
describe("Toilets", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all toilet services", (done) => {
            chai.request(app)
                .get('/toilets/')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body.length, 4);
                    done();
                });
        });
    });
});





