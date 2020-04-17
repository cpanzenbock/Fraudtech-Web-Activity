const models = require('../models')

exports.getDash = function(req, res, next) {
  return models.request.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  }).then(enhancements => {
    res.render('dashboard', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}

exports.getDashMon = function(req, res, next) {
  var month = req.params.mon;
}

exports.getDashCompMons = function(req, res, next) {
  var leftMonth = req.params.mon1;
  var rightMonth = req.params.mon2;
}

exports.getTracker = function(req, res, next) {
  return models.request.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  }).then(enhancements => {
    res.render('tracker', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}
