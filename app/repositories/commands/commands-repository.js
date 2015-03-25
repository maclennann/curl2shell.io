var Q = require('q');
var fs = require('fs');
var byline = require('byline');

function CommandsRepository() {
}

function getCommandsData(id) {
  var stream = constructStream(__dirname + '/../../data/commands.txt');
  if(id !== undefined) {
    return getLine(stream, id);
  }

  return getFile(stream)
    .then(function(lines){
      var line_number = Math.floor(Math.random() * (lines.length - 0)) + 0;
      return lines[line_number];
    });
}

CommandsRepository.prototype = {
    getCommandsData: getCommandsData
};

function constructStream(filename){
  var stream = fs.createReadStream(filename, {encoding: 'utf-8'});
  return byline.createStream(stream);
}


function getFile(stream){
  var deferred = Q.defer();
  var lines = new Array();

  stream.on('readable', function() {
    var line;
    while (null !== (line = stream.read())) {
      lines.push(line);
    }
    deferred.resolve(lines);

  });

  stream.on('error', function(err){
    deferred.reject(err);
  });

  stream.on('end', function(){
    if(deferred.promise.isPending()){
      deferred.reject('reached end of file!');
    }
  });

  return deferred.promise;
}

function getLine(stream, line_number){
  var deferred = Q.defer();

  stream.on('readable', function() {
    var line;
    while (null !== (line = stream.read())) {
      line_number -= 1;
      if(line_number == 0){
        deferred.resolve(line);
      }
    }
  });

  stream.on('error', function(err){
    deferred.reject(err);
  });

  stream.on('end', function(){
    if(deferred.promise.isPending()){
      deferred.reject('reached end of file!');
    }
  });

  return deferred.promise;
}

var commandsRepository = new CommandsRepository();

module.exports = commandsRepository;
