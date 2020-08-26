import { Fragment } from "react";
import { Item as Product } from "../Product/shortItem";
import {
  removeCartItem as removeItem,
  changeCartItem as quantityChange,
} from "../../apollo/action";
import { Row, Col } from "reactstrap";
import { formatMoney } from "../../lib/chip";
import { ImgProduct } from "../Product/imageProduct";
import { MdDelete } from "react-icons/md";
import { Link } from "../src/Link";
import { css } from "../src/css";
import theme from "../src/theme";
export const Item = ({ cartItem, onChange }) => {
  return (
    <Row style={{ marginBottom: theme.spacing(3) }}>
      <Col sm={12} md={6} lg={5}>
        <ImgProduct product={cartItem.product} />
      </Col>
      <Col>
        <Link
          href={{
            pathname: "/detail",
            query: { detail: cartItem.product.url },
          }}
        >
          <a>
            <h5 style={css.h5}>{cartItem.product.name}</h5>
          </a>
        </Link>

        <p>{formatMoney(cartItem.price)}</p>
        <div
          style={{
            display: "inline-block",
            display: "flex",
            float: "left",
            marginBottom: theme.spacing(3),
          }}
        >
          <button
            style={css.btnInline}
            onClick={() => {
              quantityChange(cartItem, -1);
            }}
          >
            -
          </button>
          <label
            style={{ fontSize: "1.2rem", marginLeft: 13, marginRight: 13 }}
          >
            {cartItem.quantity}
          </label>
          <button
            style={css.btnInline}
            onClick={() => {
              quantityChange(cartItem, +1);
            }}
          >
            +
          </button>
        </div>
        <button
          style={{
            ...css.btnInline,
            display: "inline-block",
            padding: theme.spacing(1),
            float: "right",
          }}
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          Bỏ ra
        </button>
      </Col>
    </Row>
  );
};
