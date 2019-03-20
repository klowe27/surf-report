import { ConditionsCalculator } from './../src/conditions-calculator.js';

describe('ConditionsCalculator', function() {
  let conditions;

  beforeEach(function() {
    conditions = new ConditionsCalculator('E', 14.8, 2.2);
  });

  describe('constructor', function() {
    it('should create a new instance of ConditionsCalculator and save the wind direction, swell period and swell height, and calculate the wave size based on swell period * swell height', function() {
      expect(conditions.windDirection).toEqual('E');
      expect(conditions.swellPeriod).toEqual(14.8);
      expect(conditions.swellHeight).toEqual(2.2);
      expect(conditions.waveSize).toEqual(32.56);
    });
  });
  
  describe('windDirectionScore', function() {
    it('should calculate the wind direction score based on wind condition', function() {
      expect(conditions.windDirectionScore).toEqual(5);
    });
  });
});
