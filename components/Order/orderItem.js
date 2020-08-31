import { Item } from "../Product/shortItem";
import { formatMoney } from "../../lib/chip";
import { Row, Col } from "reactstrap";
import { Fragment } from "react";
import { theme } from "../../config/index";

export function OrderItem({ item }) {
  return item ? (
    <Fragment>
      <div>
        <a style={{ display: "block" }}>Số lượng: {item.quantity}</a>
        <a style={{ display: "block" }}>
          Thành tiền: {formatMoney(item.price)}
        </a>
        <Item product={item.product} />
      </div>
    </Fragment>
  ) : null;
}
