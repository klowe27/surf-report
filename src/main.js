import { ConditionsCalculator } from './conditions-calculator.js';
import { Promise } from 'es6-promise';
import $ from 'jquery';
import './styles.css';

function getData(){
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    const url = `https://www.ndbc.noaa.gov/data/realtime2/46029.spec`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

$(document).ready(function() {
  let dataResults = getData()
  dataResults.then(function(response) {
    let responseLines = response.split('\n');
    let currentConditions = responseLines[2].split(' ');
    let year = currentConditions[0];
    let month = currentConditions[1];
    let day = currentConditions[2];
    let hour = currentConditions[3];
    let minutes = currentConditions[4];
    let windDirection = currentConditions[15];
    let windWaveHeight = currentConditions[11];
    let windWavePeriod = currentConditions[13];
    let steepness = currentConditions[21];
    let swellDirection = currentConditions[14]
    let swellPeriod = currentConditions[9];
    let swellHeight = currentConditions[8];
    
    let conditionsCalculator = new ConditionsCalculator(windDirection, swellPeriod,  swellHeight);
    let dayScore = conditionsCalculator.dayScore();
    
    $('#month').html(`${month}`);
    $('#day').html(`${day}`);
    $('#year').html(`${year}`);
    $('#hour').html(`${hour} hour `);
    $('#minutes').html(`${minutes} minutes`);
    $('#dayScore').html(`${dayScore}`);
    $('#windDirection').html(`${windDirection}`);
    $('#windWaveHeight').html(`${windWaveHeight} m`);
    $('#windWavePeriod').html(`${windWavePeriod} sec`); 
    $('#steepness').html(`${steepness}`); 
    $('#swellDirection').html(`${swellDirection}`);
    $('#swellPeriod').html(`${swellPeriod} sec`); 
    $('#swellHeight').html(`${swellHeight} m`);
    console.log(currentConditions);
}, function(error) {
  $('.showErrors').text(`There was an error processing your request: ${error.message}`);
});


});
