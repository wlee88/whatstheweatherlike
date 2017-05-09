var request = require("request");
var config = require("./config");

var locationService = require("./service/location");
var weatherService = require("./service/weather");

(function(weatherService,locationService) {
"use strict";
  
locationService(config.ipRequestServiceUrl)
  .then((location) => {
    return weatherService(location.city);
  })
  .then((weatherStatus) => {
    console.log(weatherStatus);
  })
  .catch((error) => {
    console.log(error);
  });

})(weatherService,locationService);

