
describe('CommandsController Tests', function() {

    var commandsController;
    var req;
    var res;
    var next;

    beforeEach(function() {
        req = {};
        res = { status: function(code) { return { json: function(obj) {} }} };

        sinon.spy(res, "status");

        commandsController = require('../../../../../app/controllers/v1/commands/commands-controller');
    });

    describe('get()', function() {

        it('is a function', function(done) {
            expect(commandsController.get).to.be.a('function');
            done();
        });

        // TODO structure code better so I don't need the database and stuff
        xit('should call res.status() one time', function(done) {
            commandsController.get(req, res, next);

            expect(res.status.callCount).to.equal(1);
            done();
        });

        xit('should call res.status() with 200', function(done) {
            commandsController.get(req, res, next);

            expect(res.status.calledWith(200)).to.equal(true);
            done();
        });

    });
});
