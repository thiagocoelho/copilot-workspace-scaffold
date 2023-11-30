import express from 'express';
import { FruitController } from '../controllers/fruitController';

export const setFruitRoutes = (app: express.Application) => {
  const router = express.Router();
  const fruitController = new FruitController();

  // Set up the /fruits route
  router.get('/fruits', (req, res) => {
    const fruits = fruitController.getFruits(req, res);
    return fruits;
  });

  // Use the router for all routes starting with /api
  app.use('/api', router);
};