import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, Fragment } from "react";
import { cartItemsVar, CART } from "../../apollo/action";
import { MdAddShoppingCart } from "react-icons/md";
import Link from "next/link";
import { CountIcon } from "../src/count";
export function Icon() {
  const { data, loading, error } = useQuery(CART);
  let count = 0;
  if (data?.cartItems?.length) {
    data.cartItems.map((cartItem) => {
      count += cartItem.quantity;
    });
  }
  return data?.cartItems?.length ? (
    <Link href="/cart">
      <a style={{ marginRight: 24 }}>
        <MdAddShoppingCart />
        <CountIcon count={count} />
      </a>
    </Link>
  ) : null;
}
