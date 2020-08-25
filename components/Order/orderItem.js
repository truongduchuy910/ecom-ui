import { Item } from "../Product/shortItem";
import { formatMoney } from "../../lib/chip";
import { Row, Col } from "reactstrap";
import { Fragment } from "react";
import theme from "../src/theme";
export function OrderItem({ item }) {
  return item ? (
    <Fragment>
      <div>
        <a style={{ float: "left" }}>Số lượng: {item.quantity}</a>
        <a style={{ float: "right" }}>Thành tiền: {formatMoney(item.price)}</a>
      </div>
      <div>
        <Item product={item.product} />
      </div>
    </Fragment>
  ) : null;
}
