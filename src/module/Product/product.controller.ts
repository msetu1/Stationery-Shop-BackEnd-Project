import { catchAsync } from '../utils/catchAsync';
import { ProductService } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductService.createProduct(req.body);

  res.status(200).json({
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});

const allProducts = catchAsync(async (req, res) => {
  const result = await ProductService.allProducts();

  res.status(200).json({
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});
const singleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.singleProduct(id);

  res.status(200).json({
    success: true,
    message: 'SIngle Product retrieved successfully',
    data: result,
  });
});
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await ProductService.updateProduct(id, body);

  res.status(200).json({
    success: true,
    message: ' Product updated successfully',
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductService.deleteProduct(id);

  res.status(200).json({
    success: true,
    message: 'Product deleted successfully',
    data: {},
  });
});

export const ProductController = {
  createProduct,
  allProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};
