import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './module/Product/product.route';
import { OrderRoute } from './module/Order/order.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

export default app;
