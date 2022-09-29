import React, { useEffect, useState, useReducer } from 'react';
//import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { Link } from 'react-router-dom';

function ProductScreen() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false }; //payload is contain all the data from the backend
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };

      default:
        return state;
    }
  };
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      //setProducts(result.data);
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
