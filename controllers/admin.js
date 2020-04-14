const models = require('../models')

exports.getInterface = function(req, res, next) {
  models.request.findAll().then(enhancements => {
    res.render('admin/admin', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}

exports.view = function(req, res, next) {
  models.request.findOne({
    where : {
      requestID : req.params.reqID
    }
  }).then(enhancement => {
    res.render('admin/record', { title: 'Enhancement Requests', e: enhancement });
  });
}

exports.showUpdate = function(req, res, next) {
  models.request.findOne({
    where : {
      requestID : req.params.reqID
    }
  }).then(enhancement => {
    res.render('landing', { title: 'Enhancement Requests', prefill: enhancement });
  });
}


exports.update = function(req, res, next) {
  // TODO have this actually change the record
  return models.request.findAll().then(enhancements => {
    res.render('admin/admin', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}
