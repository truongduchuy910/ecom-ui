import { Item as CartItem } from "./item";

import { formatMoney, getErrorMessage } from "../../lib/chip";
import { css } from "../src/css";
import theme from "../src/theme";

export function List({ cartItems }) {
  // loading data
  let sum = 0;
  cartItems?.map((cartItem) => {
    sum += cartItem.price;
  });

  return (
    <div style={{ paddingBottom: theme.spacing(2) }}>
      <h5 style={css.h5}>Tổng</h5>
      <p>{formatMoney(sum)}</p>
      {cartItems ? (
        cartItems?.length === 0 ? (
          <p>Bạn chưa chọn sản phẩm nào!</p>
        ) : (
          cartItems?.map((cartItem) => {
            return <CartItem key={cartItem.product.id} cartItem={cartItem} />;
          })
        )
      ) : null}
    </div>
  );
}
