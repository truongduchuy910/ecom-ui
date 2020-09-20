import { Item } from "../Product/shortItem";
import { formatMoney } from "../../lib/chip";
import { Row, Col } from "reactstrap";
import { Fragment } from "react";
export function OrderItem({ item }) {
  return item ? (
    <Fragment>
      <a>Số lượng: {item.quantity}</a>
      <a>Thành tiền: {formatMoney(item.price)}</a>
      <Item product={item.product} />
    </Fragment>
  ) : null;
}
