import express from 'express';
import { setFruitRoutes } from './routes/fruitRoutes';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set up fruit routes
setFruitRoutes(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;