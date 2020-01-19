'use strict'
const YOUR_API_KEY='Y8GbaazoUybIIzmd8dk9qGxTGJsuxWAc';
var accuweather = require('node-accuweather')()(YOUR_API_KEY);
const patternDict = require('./patterns');
const matcher = require('./matcher');
const request = require('request');
const getWeather = require("./weather")
const getForecast = require("./forecast")
const Readline = require('readline'); //for reading inputs
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
// /well?come?/ig   //i ignore flag, g all matched words


rl.setPrompt('> ');
rl.prompt();

rl.on('line', reply => {
  matcher(reply, cb => {
    rl.prompt();
    switch(cb.intent) {
      case 'Hello':
        console.log(cb.intent)
        rl.prompt();
        break;
      case 'Exit':
        console.log('chatbot left the chat.')
        process.exit();
      case 'Current Weather':
        //I don't have time to change, but there should be a check that the city exists!!

        getWeather(cb.entities.city, weatherConditions => {
          if (weatherConditions.Temperature < 10){
            console.log(`\x1b[0m%s\x1b[36m%s\x1b[0m`, `Keep warm! It is `, `${weatherConditions.Temperature}°C.`)
            rl.prompt();
          } else {
            console.log(`\x1b[0m%s\x1b[36m%s\x1b[0m`, `It's fresh outside at `, `${weatherConditions.Temperature}°C.`)
          }
        });
        // getForecast(`28913` => {
        //   console.log(weatherConditions . data )
        // });
        break;
      default:
        console.log('default')
        rl.prompt();
        break
    }
  });
});
