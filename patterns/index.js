const patternDict = [{
  pattern : `\\b(?<greeting>Hi|Hello|Hey)\\b`,
  intent : `Hello`
  } ,{
  pattern :`\\b(bye|exit)\\b`,
  intent : `Exit`
  },{
  pattern :`in \\b(?<city>.+\\b.*\\b)`,
  intent : `Current Weather`
  },{
  pattern: 'weather\\sforecast\\s(in|for|of)\\s\\b(?<city>[a-z]+\\s?[a-z]+?)$',
  intent: 'forecast'
  },{
  pattern: 'like\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
  },{
  pattern: 'temperature\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
  },{
  pattern: '\\b(?<weather>hot|cold|rain|rainy|sunny|windy|drizzle)\\s\\bin\\s\\b(?<city>[a-z]+\\s?[a-z]+?)\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today)$',
  intent: 'WeatherForecast'
  }];

module.exports = patternDict ;


/* how to improve patterns:
A. Human response: if it is very cold, say it.
B. Colouring of words
C. Is it cold in Paris? Yes/no.
TO ADD: Better city regex: in New Haven...
*/
