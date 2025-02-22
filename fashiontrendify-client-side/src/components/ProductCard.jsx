import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0].secure_url} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <Link to={`/product/${product._id}`} className="product-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;