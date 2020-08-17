import { Row, Col } from "reactstrap";
import { ImgProduct } from "./imageProduct";
import { formatMoney } from "../../lib/chip";
import { addProductToLocalCart } from "../../apollo/action";

export function QuickView({ product }) {
  return (
    <Row>
      <Col
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "inherit",
          }}
        >
          <ImgProduct product={product} />
        </div>
      </Col>
      <Col
        lg={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ textAlign: "start" }}>{product.name}</h1>
          <h5>{formatMoney(product.price)}</h5>
          {product.sale ? (
            <h5>{formatMoney(product.price - product.sale)}</h5>
          ) : null}
          <p>{product.description}</p>

          <button
            onClick={() => {
              addProductToLocalCart({ product });
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </Col>
    </Row>
  );
}
