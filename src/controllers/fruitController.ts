import { Request, Response } from 'express';
import { FruitService } from '../services/fruitService';

export class FruitController {
    private fruitService: FruitService;

    constructor() {
        this.fruitService = new FruitService();
    }

    public getFruits = async (req: Request, res: Response): Promise<void> => {
        try {
            const fruits = await this.fruitService.getFruits();
            res.json(fruits);
        } catch (error) {
            res.status(500).send({ message: 'Error occurred while fetching fruits' });
        }
    }
}