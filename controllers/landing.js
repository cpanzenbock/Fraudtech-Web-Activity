var xmlify = require('object-to-xml')
var fs = require('fs')
const models = require('../models')

exports.getLanding = function(req, res, next) {
  return res.render('landing', { title: 'Enhancement Requests', url: '/2' });
}

exports.getNextPage = function(req, res, next) {
return res.render('page2', { title: 'Enhancement Requests', e: req.body, url: '/3'});
}

exports.getLastPage = function(req, res, next) {
  return res.render('page3', { title: 'Enhancement Requests', e: req.body, url: '/submit'});
}

exports.nextPage = function(req, res, next) {
  // Serve the next page of the form retaining previous data
  return res.redirect('/2');
}

exports.lastPage = function(req, res, next) {
  // Serve the last page of the form retaining previous data
  return res.redirect('/3');
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
