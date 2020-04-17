const models = require('../models')
const sequelize = require('sequelize')
const months = {
  "No": false,
  "0119": ["January 1, 2019 00:00:01", "February 1, 2019 00:00:01"],
  "0219": ["February 1, 2019 00:00:01", "March 1, 2019 00:00:01"],
  "0319": ["March 1, 2019 00:00:01", "April 1, 2019 00:00:01"],
  "0419": ["April 1, 2019 00:00:01", "May 1, 2019 00:00:01"],
  "0519": ["May 1, 2019 00:00:01", "June 1, 2019 00:00:01"],
  "0619": ["June 1, 2019 00:00:01", "July 1, 2019 00:00:01"],
  "0719": ["July 1, 2019 00:00:01", "August 1, 2019 00:00:01"],
  "0819": ["August 1, 2019 00:00:01", "Spetember 1, 2019 00:00:01"],
  "0919": ["Spetember 1, 2019 00:00:01", "October 1, 2019 00:00:01"],
  "1019": ["October 1, 2019 00:00:01", "November 1, 2019 00:00:01"],
  "1119": ["November 1, 2019 00:00:01", "December 1, 2019 00:00:01"],
  "1219": ["December 1, 2019 00:00:01", "January 1, 2019 00:00:01"],
  "0120": ["January 1, 2019 00:00:01", "February 1, 2019 00:00:01"],
  "0220": ["February 1, 2019 00:00:01", "March 1, 2019 00:00:01"],
  "0320": ["March 1, 2019 00:00:01", "April 1, 2019 00:00:01"],
  "0420": ["April 1, 2019 00:00:01", "May 1, 2019 00:00:01"],
}

exports.getDash = function(req, res, next) {
  var month = "April 1, 2019 00:00:01";
  var monthLower = Date(months["0420"][0]);
  var monthHigher = Date(months["0420"][1]);
  monthHigher.setMonth(monthHigher.getMonth()+1)

  return models.request.findAll({
    attributes: ['feature', [sequelize.fn('COUNT', sequelize.col('feature')), 'value']],
    group: 'feature',
    where: {
      createdAt: {
        [sequelize.gte]: new Date(monthLower),
        [sequelize.lt]: new Date(monthHigher),
      }
    },
  }).then(stats => {
    console.log(stats);
    res.render('dashboard', { title: 'Enhancement Requests', stats1: stats });
  });
}

exports.getDashMon = function(req, res, next) {
  var month = req.params.mon;
}

exports.getDashCompMons = function(req, res, next) {
  var leftMonth = req.params.mon1;
  var rightMonth = req.params.mon2;
}

exports.getTracker = function(req, res, next) {
  return models.request.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  }).then(enhancements => {
    res.render('tracker', { title: 'Enhancement Requests', enhancements: enhancements });
  });
}
