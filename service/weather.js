// Returns a promise where given a location returns a string with weather description.

var request = require("request");
var config = require("./../config");

var getWeather = (location) => {
  return new Promise((resolve, reject) => {
    var encodedLocation = encodeURIComponent(location)// -- super useful and will encode spaces etc
    //var url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=4c897f9adcfc81fd6d14e6394e1a3910&units=metric`;

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