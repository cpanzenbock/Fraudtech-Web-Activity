var xmlify = require('object-to-xml')
var fs = require('fs')

exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Enhancement Requests' });
}

exports.submitEnhancement = function(req, res, next) {
  console.log("Enhancement Submission:", req.body);
  let timestamp = Date.now();
  console.log("Timestamp: ", timestamp);
  let options = {
    compact: true,
    spaces: 2
  };
  let xmltxt = xmlify(req.body);

  // console.log("XML:", xmltxt);

  // Write xml to file
  fs.open("./submissions/" + timestamp + ".xml", 'w+', (err, fd) => {
    if (err) console.log('Submission open file error', err);
    else {
      fs.write(fd, xmltxt, (err, bytesWrit, buff) => {
        if (err) console.log('Submission write file error', err);
      });
    }
  });

  /* // Send xml as response back to browser
  res.set('Content-Type', 'text/xml');
  res.send(convert.json2xml(req.body));
  */
  res.redirect('/');
}
