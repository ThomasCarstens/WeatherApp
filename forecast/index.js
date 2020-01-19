"use strict ";
const axios = require ("axios") ;
const YOUR_API_KEY = 'Y8GbaazoUybIIzmd8dk9qGxTGJsuxWAc';
var accuweather = require('node-accuweather')()(YOUR_API_KEY);

const getForecast = location => {
  return new Promise ( async ( resolve , reject ) => {
    try {
      const weatherConditions = await axios .get( // get weather info from the api

        "http://dataservice.accuweather.com/forecasts/v1/daily/1day/28143?apikey=jROced7Frkml5uVxyMLcAB0X9G5NAJRk",
        {
        params : {
        key: YOUR_API_KEY ,
        q: location ,
        days : 3
        }
        }) ;
        //console.log(weatherConditions . data);
        resolve ( weatherConditions . data ) // returns back theresults to the chatbot

    }
    catch ( error ) {
      reject ( error ) ;
    }
  }) ;
}

module . exports = getForecast ;
