var xml = require('xml')

exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Enhancement Requests' });
}

exports.submitEnhancement = function(req, res, next) {
  console.log("Email:", req.body.logon);
  res.set('Content-Type', 'text/xml');
  res.send(xml(req.body));
  // res.redirect('/');
}
