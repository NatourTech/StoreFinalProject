import React, { useEffect, useState } from 'react';
//import data from '../data';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Feaured Products</h1>
      <div className="products">
        {/* Products card */}
        {products.map((product) => (
          //  {/* Product card */}
          <Link to={`/office-products/${product.id}`}>
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-name">
                <p>{product.name}</p>
              </div>

              <div className="productBtn">
                <button className="btn plus">+</button>
                <input type="text" readOnly="readOnly"></input>
                <button className="btn minus">-</button>
              </div>

              <div className="product-price">
                <strong>₪{product.price}</strong>
                <button>Add To cart</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductScreen;
