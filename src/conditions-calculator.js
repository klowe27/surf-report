export class ConditionsCalculator {
  constructor(windDirection, swellPeriod, swellHeight) {
    this.windDirection = windDirection;
    this.swellPeriod = swellPeriod;
    this.swellHeight = swellHeight;
    this.waveSize = swellPeriod*swellHeight;
  }
}
