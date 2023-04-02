var Sequence = require('../models/id');

var maxMovieId;
var maxCharacterId;
var maxSpinoffId;
var sequenceId = null;

function SequenceGenerator() {

  ID.findOne()
    .exec(function(err, sequence) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      maxCharacterId = sequence.maxCharacterId;
      maxSpinoffId = sequence.maxSpinoffId;
      maxMovieId = sequence.maxMovieId;
    });
}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'movies':
      maxMovieId++;
      updateObject = {maxMovieId: maxMovieId};
      nextId = maxMovieId;
      break;
    case 'characters':
      maxCharacterId++;
      updateObject = {maxCharacterId: maxCharacterId};
      nextId = maxCharacterId;
      break;
    case 'spinoffs':
      maxSpinoffId++;
      updateObject = {maxSpinoffId: maxSpinoffId};
      nextId = maxSpinoffId;
      break;
    default:
      return -1;
  }

  Sequence.update({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();
