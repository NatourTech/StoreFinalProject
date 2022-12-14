import React, { useContext, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Row, Col, ListGroup, Card, Badge, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { getError } from "./Utils";
import { Store } from "../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
function Product() {
  const params = useParams();
  const { id } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [id]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product.id}`);
   
    
    // validate custmer cart quantity and stock remain
    if (data.countInStock < quantity) {
      window.alert(`Sorry, ${data.countInStock} items remain in stock (- _ -)`);
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* change page title to product name */}
              <Helmet>
                <title>{product.name}</title>
              </Helmet>

              <h1>{product.name}</h1>
            </ListGroup.Item>

            {/* ???????? + ???????? */}
            <ListGroup.Item>
              <h1> ??? {product.price}</h1>
            </ListGroup.Item>

            {/* ???????????? ?????????? */}
            <ListGroup.Item>
              <h1>{product.name} ???????????? ?????????? </h1>
            </ListGroup.Item>

            {/* ???????? ???? ?????????? \ ????????*/}
            <ListGroup.Item>
              <p>{product.description}</p>
            </ListGroup.Item>

            {/* ?????????? ?????? ???? ?????????? */}
            <ListGroup.Item>
              <p>{product.description} ?????????? ?????? ???? ?????????? </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>??? {product.price}</Col>
                    <Col>:???????? </Col>
                  </Row>
                </ListGroup.Item>

                {/* ???????????? ?????????? */}
                <ListGroup.Item>
                  <Row>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success"> ????????</Badge>
                      ) : (
                        <Badge bg="danger"> ???? ????????</Badge>
                      )}
                    </Col>
                    <Col>???????????? ??????????</Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        ???????? ??????????
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
