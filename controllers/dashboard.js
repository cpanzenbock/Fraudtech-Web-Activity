const models = require('../models')
const sequelize = require('sequelize')

exports.getDash = function(req, res, next) {
  var month = "0420";

  return models.request.findAll({
    attributes: ['feature', [sequelize.fn('COUNT', sequelize.col('feature')), 'value']],
    group: 'feature',
  }).then(stats => {
    console.log(stats);
    res.render('dashboard', { title: 'Enhancement Requests', stats1: stats });
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
