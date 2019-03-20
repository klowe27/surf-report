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
    it('should calculate the wind direction score', function() {
      expect(conditions.windDirectionScore()).toEqual(5);
    });
  });
  
  describe('swellPeriodScore', function() {
    it('should calculate the swellPeriod score', function() {
      expect(conditions.swellPeriodScore()).toEqual(4);
    });
  });
  
  describe('waveSizeScore', function() {
    it('should calculate the wave size score', function() {
      expect(conditions.waveSizeScore()).toEqual(5);
    });
  });
  
  describe('dayScore', function() {
    it('should calculate the day score by calculating the average of the wind direction, swell period and wave size scores', function() {
      expect(conditions.dayScore()).toEqual(4.67);
    });
  });
  
});
