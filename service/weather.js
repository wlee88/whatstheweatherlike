// Returns a promise where given a location returns a string with weather description.

// Documentation available here if you're curious about the return object:
// https://openweathermap.org/current

var request = require("request");
var config = require("./../config");

var getWeather = (location) => {
  return new Promise((resolve, reject) => {
    var url = `${config.weatherServiceUrl}&q=${encodeURIComponent(location)}&appid=${config.weatherServiceAppId}&units=${config.weatherServiceUnits}`;

    if (!location) {
      return reject("No Location provided");
    };

    request({
      url: url, json: true
    }, (error,response, body) => {
      if (error) {
        reject("unable to fetch weather");
      } else {
        resolve(`Right now... It's ${Math.round(body.main.temp)}°C in ${body.name}`);
      }
    }
    );
  });
};

module.exports = getWeather;