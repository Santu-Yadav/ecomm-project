import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>ProShop &copy; {currentyear}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
