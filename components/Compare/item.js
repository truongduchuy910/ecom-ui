import { Item as Product } from "../Product/shortItem";
import { Fragment } from "react";
import {
  removeCompareItem,
  addProductToLocalWishlist,
  addProductToLocalCart,
} from "../../apollo/action";

export function Item({ product }) {
  return (
    <div>
      <Product product={product} />
      <button onClick={() => removeCompareItem(product)}>remove</button>
      <button onClick={() => addProductToLocalWishlist(product)}>
        add to wishlist
      </button>
      <button onClick={() => addProductToLocalCart({product})}>
        add to cart
      </button>
    </div>
  );
}
