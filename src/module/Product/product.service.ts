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
// single product
const singleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
// update product
const updateProduct = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
// delete product
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  allProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};
