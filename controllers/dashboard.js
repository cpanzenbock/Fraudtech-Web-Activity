const models = require('../models')

exports.getDash = function(req, res, next) {
  models.request.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  }).then(enhancements => {
    /*
    if (enhancements) {
      enhancements.forEach((e) => {
        console.log('Item: ', e.user);
      });
    } else {
      console.log('No :(');
    }
    */

    res.render('dashboard', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}
