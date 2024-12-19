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

export const ProductController = {
  createProduct,
  allProducts,
};
