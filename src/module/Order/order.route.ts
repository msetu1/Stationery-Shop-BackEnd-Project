import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/create-Order', OrderController.createOrder);
router.get('/revenue', OrderController.calculateRevenue);

export const OrderRoute = router;
