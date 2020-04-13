const models = require('../models')

exports.getDash = function(req, res, next) {
  res.render('dashboard', { title: 'Enhancement Requests' });
}
