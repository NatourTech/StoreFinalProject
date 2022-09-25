import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function productScreen() {
  return (
    <div>
      <h1>Feaured Products</h1>
      <div className="products">
        {/* Products card */}
        {data.products.map((product) => (
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

export default productScreen;
