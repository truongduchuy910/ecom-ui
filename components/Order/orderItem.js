import { Item } from "../Product/shortItem";
import { formatMoney } from "../../lib/chip";
import { Row, Col } from "reactstrap";
import { Fragment, useContext } from "react";
import { SellerContext } from "../src/SellerProvider";

export function OrderItem({ item }) {
  const theme = useContext(SellerContext);
  return item ? (
    <Fragment>
      <div>
        <Item product={item.product} />
        <a style={{ display: "block", marginBottom: theme.spacing(5) }}>
          Số lượng: {item.quantity}, thành tiền: {formatMoney(item.price)}
        </a>
      </div>
    </Fragment>
  ) : null;
}
