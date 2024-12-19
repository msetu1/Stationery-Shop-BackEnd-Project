import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const ProductService = {
  createProduct,
};
