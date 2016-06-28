var Fetch = require('whatwg-fetch');

var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

var service = {
  get: function () {
      return fetch(url).then(function (response) {
          return response.json();
      });
  }  
};

module.exports = service;