import { useState, Fragment, useReducer } from "react";

import { Create as CreateCustomer } from "../Customer/create";
import {
  CREATE_ORDER_ITEMS,
  CREATE_ORDER,
  CART,
  OrderItemsCreateInputs,
  order,
} from ".";
import { useMutation, useQuery } from "@apollo/client";
import { Loading } from "../src/Loading";
import { useRouter } from "next/router";
import { page } from "../../config/index";
export const QuickCart = ({ cartItems }) => {
  const router = useRouter();
  // query
  const { data: cartData, loading, error } = useQuery(CART);
  // mutation
  const [createOrderItems] = useMutation(CREATE_ORDER_ITEMS);
  const [createOrder] = useMutation(CREATE_ORDER);

  if (loading || error || !cartData) return <Loading />;

  const { customer, user } = cartData;
  let sum = 0;
  cartItems?.map((cartItem) => {
    sum += cartItem.price;
  });

  // create OrderItemsCreateInputs (GraphQL type)
  let dataOICI = OrderItemsCreateInputs(cartItems);
  dataOICI?.map(
    (data) => (data.data.ofSeller = { connect: { id: page.seller.id } })
  );

  // function
  return (
    <Fragment>
      {cartItems?.length ? (
        <CreateCustomer
          onCreate={({ customer }) => {
            order({
              createOrderItems,
              createOrder,
              dataOICI,
              page,
              customer,
              sum,
              router,
            });
          }}
        />
      ) : null}
    </Fragment>
  );
};
