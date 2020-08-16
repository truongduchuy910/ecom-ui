import { Fragment } from "react";
import { Item as Product } from "../Product/shortItem";
import {
  removeCartItem as removeItem,
  changeCartItem as quantityChange,
} from "../../apollo/action";
import { OrderItem } from "../Order/orderItem";
export const Item = ({ cartItem, onChange }) => {
  return (
    <div>
      <OrderItem item={cartItem} />
      sl:
      <button
        onClick={() => {
          quantityChange(cartItem, +1);
        }}
      >
        +
      </button>
      {cartItem.quantity}
      <button
        onClick={() => {
          quantityChange(cartItem, -1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          removeItem(cartItem);
        }}
      >
        remove
      </button>
    </div>
  );
};
