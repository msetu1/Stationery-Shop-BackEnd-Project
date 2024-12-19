import { Product } from '../Product/product.model';
import { catchAsync } from '../utils/catchAsync';
import { Order } from './order.model';

const createOrder = catchAsync(async (req, res) => {
  const { email, product, quantity, totalPrice } = req.body;

  const existingOrder = await Product.findById(product);

  if (!existingOrder) {
    throw new Error('product not found');
  }

  if (existingOrder.quantity < quantity) {
    throw new Error(' insufficient stock');
  }

  const newOrder = { email, product, quantity, totalPrice };
  const order = await Order.create(newOrder);

  existingOrder.quantity -= quantity;

  if (existingOrder.quantity === 0) {
    existingOrder.inStock = false;
  }
  await existingOrder.save();

  res.status(200).json({
    success: true,
    message: 'User created successfully',
    data: order,
  });
});

export const OrderController = {
  createOrder,
};
