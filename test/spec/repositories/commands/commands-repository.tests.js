
describe('CommandsRepository Tests', function() {

  var commandsRepository;

  beforeEach(function() {
    commandsRepository = require('../../../../app/repositories/commands/commands-repository');
  });

  describe('getCommandsData()', function() {

    it('is a function', function(done) {
      expect(commandsRepository.getCommandsData).to.be.a('function');
      done();
    });

  });
});
