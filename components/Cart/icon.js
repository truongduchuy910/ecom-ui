import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, Fragment } from "react";
import { cartItemsVar, CART } from "../../apollo/action";

import Link from "next/link";
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
      <a>cart ({count})</a>
    </Link>
  ) : null;
}
