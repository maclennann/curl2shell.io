
describe('CommandsService Tests', function() {

  var commandsService;

  beforeEach(function() {
    commandsService = require('../../../../app/services/commands/commands-service');
  });

  describe('lookupCommands', function() {

    it('is a function', function(done) {
      expect(commandsService.getCommandById).to.be.a('function');
      done();
    });

  });
});
