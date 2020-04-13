var xmlify = require('object-to-xml')
var fs = require('fs')
const models = require('../models')

exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Enhancement Requests' });
}

exports.submitEnhancement = function(req, res, next) {
  // Prepare to write xml to file
  let timestamp = Date.now();
  console.log("Timestamp: ", timestamp);
  let options = {
    compact: true,
    spaces: 2
  };
  let xmltxt = xmlify(req.body);

  // Write xml to file
  fs.open("./submissions/" + timestamp + ".xml", 'w+', (err, fd) => {
    if (err) console.log('Submission open file error', err);
    else {
      fs.write(fd, xmltxt, (err, bytesWrit, buff) => {
        if (err) console.log('Submission write file error', err);
      });
    }
  });

  // Create row in database
  return models.request.create({
    user: req.body.logon,
    feature: req.body.sel1,
    description: req.body.describe,
    usageNumbers: req.body.quantity,
  }).then(enhancement => {
    res.redirect('/status');
  });
}
