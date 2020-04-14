const models = require('../models')

exports.getInterface = function(req, res, next) {
  models.request.findAll().then(enhancements => {
    /*
    if (enhancements) {
      enhancements.forEach((e) => {
        console.log('Item: ', e.user);
      });
    } else {
      console.log('No :(');
    }
    */

    res.render('admin', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}
