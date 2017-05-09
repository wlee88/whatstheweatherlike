// Returns a promise where your location information is retrieved from your IP Address from a called to ipinfo.

var request = require("request");
var config = require("./../config");

var getLocation = () => {
  var url = config.ipRequestServiceUrl;
  return new Promise((resolve, reject) => {
    request({
      url: url,
      json: true
    }, (error, response, body) => {
      if (error) {
        return reject(error);
      } else {
        resolve(body);
      };
    });
  });
};

module.exports = getLocation;