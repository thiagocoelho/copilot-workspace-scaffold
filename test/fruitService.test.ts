import { FruitService } from '../src/services/fruitService';

describe('FruitService', () => {
  let fruitService: FruitService;

  beforeEach(() => {
    fruitService = new FruitService();
  });

  describe('getFruits', () => {
    it('should return a list of fruits', () => {
      const fruits = fruitService.getFruits();
      expect(fruits).toBeInstanceOf(Array);
      expect(fruits).toEqual(['Apple', 'Banana', 'Cherry']);
    });
  });
});