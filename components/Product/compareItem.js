import { Row, Col } from "reactstrap";
import { ImgProduct } from "./imageProduct";
import { formatMoney } from "../../lib/chip";
import { addProductToLocalCart } from "../../apollo/action";

import { Link } from "../src/Link";


export function Item({ product, onClick }) {
  return (
    <div>
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
                <h1 style={theme.css.h1}>{product.name}</h1>
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
              style={theme.css.button}
              onClick={() => {
                addProductToLocalCart({ product });
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
