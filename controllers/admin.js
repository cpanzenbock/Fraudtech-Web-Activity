const models = require('../models')
const secret_url = '/971.911.39.241/';
exports.secret_url = secret_url;

exports.getInterface = function(req, res, next) {
  return models.request.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  }).then(enhancements => {
    res.render('admin/admin', { title: 'Enhancement Requests', enhancements: enhancements, url: secret_url });
  });
}

exports.view = function(req, res, next) {
  return models.request.findOne({
    where : {
      requestID : req.params.reqID
    },
  }).then(enhancement => {
    res.render('admin/record', { title: 'Enhancement Requests', e: enhancement, url: secret_url });
  });
}

exports.showUpdate = function(req, res, next) {
  let reqID = req.params.reqID;
  return models.request.findOne({
    where : {
      requestID : reqID
    },
  }).then(enhancement => {
    res.render('landing', { title: 'Enhancement Requests', prefill: enhancement, url: secret_url + reqID + '/update' });
  });
}


exports.update = function(req, res, next) {
  let reqID = req.params.reqID;

  return models.request.update({
    user: req.body.logon,
    feature: req.body.sel1,
    description: req.body.describe,
    usageNumbers: req.body.quantity,
  }, {
    where: {
      requestID: reqID
    }
  }).then(result => {
    res.redirect(secret_url + reqID);
  });
}

exports.delete = function(req, res, next) {
  let reqID = req.params.reqID;

  return models.request.destroy({
    where: {
      requestID: reqID
    }
  }).then(result => {
    res.redirect(secret_url);
  });
}
