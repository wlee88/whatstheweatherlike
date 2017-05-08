var request = require("request");

var getWeather = (location) => {
  return new Promise((resolve, reject) => {
    location = encodeURIComponent(location)// -- super useful and will encode spaces etc
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4c897f9adcfc81fd6d14e6394e1a3910&units=metric`;

    if (!location) {
      return reject("No Location provided");
    };

    request({
      url: url, json: true
    }, (error,response, body) => {
      if (error) {
        reject("unable to fetch weather");
      } else {
        resolve(`It's ${Math.round(body.main.temp)}°C in ${body.name}`);
      }
    }
    );
  });
};
var getLocation = () => {
  var url = 'http://ipinfo.io';
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

getLocation()
  .then((location) => {
    return getWeather(location.city);
  })
  .then((weatherStatus) => {
    console.log(weatherStatus);
  })
  .catch((error) => {
    console.log(error);
  });

