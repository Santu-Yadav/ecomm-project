import { Col, Row } from "react-bootstrap";
import products from "../products";

import Product from "./../component/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col lg={4} sm={12} md={6} xl={3}>
              <Product key={product._id} product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
