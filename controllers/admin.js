const models = require('../models')

exports.getInterface = function(req, res, next) {
  models.request.findAll().then(enhancements => {
    res.render('admin', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}

exports.view = function(req, res, next) {
  models.request.findOne({
    where : {
      requestID : req.params.reqID
    }
  }).then(enhancement => {
    res.render('record', { title: 'Enhancement Requests', e: enhancement });
  });
}

exports.update = function(req, res, next) {
  models.request.findAll().then(enhancements => {
    res.render('admin', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}
