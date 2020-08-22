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
import Link from "next/link";
const style = { css: { width: 35, height: 35, padding: 0, margin: 0 } };

export const Item = ({ cartItem, onChange }) => {
  return (
    <Row>
      <Col sm={12} md={6} lg={5}>
        <ImgProduct product={cartItem.product} />
      </Col>
      <Col>
        <Link href={"/products/" + cartItem.product.url}>
          <a>
            <h5>{cartItem.product.name}</h5>
          </a>
        </Link>

        <p>{formatMoney(cartItem.price)}</p>
        <div style={{ display: "inline-block", display: "flex" }}>
          <button
            style={style.css}
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
            style={style.css}
            onClick={() => {
              quantityChange(cartItem, +1);
            }}
          >
            +
          </button>
        </div>
        <button
          style={{ display: "inline", width: "auto", marginTop: 13 }}
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          Bỏ khỏi giỏ hàng
        </button>
      </Col>
    </Row>
  );
};
