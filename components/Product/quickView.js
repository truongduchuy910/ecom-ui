import { Row, Col } from "reactstrap";
import { ImgProduct } from "./imageProduct";
import { formatMoney } from "../../lib/chip";
import { addProductToLocalCart } from "../../apollo/action";
import { Fragment } from "react";
import { Divider } from "../src/Divider";
import { Link } from "../src/Link";
export function QuickView({ product, onClick }) {
  return (
    <div style={{ maxHeight: "60vh" }}>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImgProduct product={product} />
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
            <Link
              href={{
                pathname: "/detail",
                query: { detail: product.url },
              }}
            >
              <a>
                <h1>{product.name}</h1>
              </a>
            </Link>
            <h5
              style={{
                textDecoration: product.sale ? "line-through" : "",
                color: product.sale ? "var(--secondary)" : "default",
                fontSize: product.sale ? 15 : "default",
                float: product.sale ? "right" : "default",
              }}
            >
              {formatMoney(product.price)}
            </h5>
            {product.sale ? (
              <h5>{formatMoney(product.price - product.sale)}</h5>
            ) : null}
            <p>{product.description?.slice(0, 200)}...</p>

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
      <button
        onClick={() => onClick()}
        style={{
          position: "absolute",
          top: 80,
          right: 5,
          width: 50,
          height: 50,
        }}
      >
        x
      </button>
    </div>
  );
}
