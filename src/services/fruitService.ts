export class FruitService {
  private fruits: string[];

  constructor() {
    this.fruits = ['Apple', 'Banana', 'Cherry'];
  }

  public getFruits(): string[] {
    return this.fruits;
  }
}