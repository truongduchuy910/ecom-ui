import { Item as CartItem } from "./item";

import { formatMoney, getErrorMessage } from "../../lib/chip";

import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";


export function List({ cartItems }) {
  const theme = useContext(SellerContext);

  // loading data
  let sum = 0;
  cartItems?.map((cartItem) => {
    sum += cartItem.price;
  });

  return (
    <div style={{ paddingBottom: theme.spacing(2) }}>
      {cartItems ? (
        cartItems?.length === 0 ? (
          <p>Bạn chưa chọn sản phẩm nào!</p>
        ) : (
          cartItems?.map((cartItem) => {
            return <CartItem key={cartItem.product.id} cartItem={cartItem} />;
          })
        )
      ) : null}
      <h5 style={{ ...theme.css.h5, display: "inline-block" }}>Tổng:</h5>
      <p style={{ display: "inline-block", marginLeft: theme.spacing(2) }}>
        {formatMoney(sum)}
      </p>
    </div>
  );
}
