import { Item as Product } from "../Product/shortItem";
import { Fragment } from "react";
import { removeWishListItem, addProductToLocalCart } from "../../apollo/action";

export function Item({ product }) {
  return (
    <div>
      <Product product={product} />
      <button onClick={() => removeWishListItem(product)}>remove</button>
      <button onClick={() => addProductToLocalCart({product})}>
        add to cart
      </button>
    </div>
  );
}
