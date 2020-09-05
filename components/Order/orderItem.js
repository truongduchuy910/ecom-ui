import { Item } from "../Product/shortItem";
import { formatMoney } from "../../lib/chip";
import { Row, Col } from "reactstrap";
import { Fragment } from "react";
import { theme } from "../../config/index";

export function OrderItem({ item }) {
  return item ? (
    <Fragment>
      <div>
        <Item product={item.product} />
        <a style={{ display: "block", float: "left" }}>
          Số lượng: {item.quantity}
        </a>
        <a style={{ display: "block", float: "right" }}>
          {formatMoney(item.price)}
        </a>
      </div>
    </Fragment>
  ) : null;
}
