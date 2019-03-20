export class ConditionsCalculator {
  constructor(windDirection, swellPeriod, swellHeight) {
    this.windDirection = windDirection;
    this.swellPeriod = swellPeriod;
    this.swellHeight = swellHeight;
    this.waveSize = swellPeriod*swellHeight;
  }
  
  windDirectionScore() {
    if (this.windDirection === 'E') {
      return 5;
    } else if (this.windDirection === 'NE' || this.windDirection === 'SE') {
      return 4;
    } else if (this.windDirection === 'SE') {
      return 3;
    } else {
      return 1
    }
  }
}
