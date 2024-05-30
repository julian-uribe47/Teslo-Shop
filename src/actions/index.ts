'use server';

import { getProductBySlug } from './product/get-product-by-slug';
import { getStockBySlug } from './product/get-stock-by-slug';
import { getpaginatedProductsWithImages } from './product/product-pagination';








export{
    getProductBySlug,
    getStockBySlug,
    getpaginatedProductsWithImages
};
