import { TOrder } from './order.interface';
import { Order } from './order.model';

// create product
export const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
