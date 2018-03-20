import React from 'react';

const Product = ({product}) => {
  return (
    <div>
    <div>PRODUCT</div>
    <p>{product.name} | {product.id} | {product.price}</p>
    </div>
    );
};

export default Product;
