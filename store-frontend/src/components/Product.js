import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style.css";

function Product(props) {
  const { product } = props;
  return (
    <Card border="light" bg="dark" className="mb-2">
      <Link to={`/office-products/${product.id}`}>
        <div className="product imgBox " key={product.id}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />

          <Card.Body>
            <div className="product-name contentBox">
              <Card.Title className="card-name">{product.name}</Card.Title>
              <Card.Subtitle>
                <p>{product.description}</p>
              </Card.Subtitle>
            </div>

            <Card.Text className="card-price">₪{product.price}</Card.Text>

            <Button className="buy">Add To Card</Button>
          </Card.Body>
        </div>
      </Link>
    </Card>
  );
}

export default Product;
