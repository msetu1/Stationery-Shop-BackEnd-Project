import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
// All product
const allProducts = async () => {
  const result = await Product.find();
  return result;
};

export const ProductService = {
  createProduct,
  allProducts,
};
