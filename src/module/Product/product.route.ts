import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);
router.get('/', ProductController.allProducts);
router.get('/:id', ProductController.singleProduct);

export const ProductRoute = router;
