import { ImgProduct } from "../Product/imageProduct";
import { Fragment } from "react";
import {
  removeCompareItem,
  addProductToLocalWishlist,
  addProductToLocalCart,
} from "../../apollo/action";
import { Row, Col } from "reactstrap";
import { formatMoney } from "../../lib/chip";

export function Item({ product }) {
  return (
    <Row style={{ marginBottom: 13 }}>
      <Col sm={4} style={{ display: "flex", alignItems: "center" }}>
        <ImgProduct product={product} />
      </Col>
      <Col sm={8} style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <p>{formatMoney(product.price)}</p>
        </div>
      </Col>
    </Row>
  );
}
