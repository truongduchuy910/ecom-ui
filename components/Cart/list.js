import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, Fragment, useState } from "react";
import {
  newOrderVar,
  customerVar,
  CART,
  newOrderCountVar,
  emptyCart,
} from "../../apollo/action";
import { Item as CartItem } from "./item";
import { emptyCart as empty } from "../../apollo/action";
import { Spinner } from "reactstrap";
import { useRouter } from "next/router";
import { page } from "../../config";
// create orderItem
export const CREATE_ORDER_ITEMS = gql`
  mutation($data: [OrderItemsCreateInput]) {
    createOrderItems(data: $data) {
      id
    }
  }
`;

// create Order
export const CREATE_ORDER = gql`
  mutation(
    $items: [OrderItemWhereUniqueInput]
    $customer: CustomerWhereUniqueInput
    $ofSeller: UserWhereUniqueInput
  ) {
    createOrder(
      data: {
        customer: { connect: $customer }
        items: { connect: $items }
        ofSeller: { connect: $ofSeller }
      }
    ) {
      id
      seller {
        id
        name
      }
      items {
        id
        product {
          image {
            publicUrl
          }
          images {
            file {
              publicUrl
            }
          }
          name
        }
        price
        quantity
        attributes {
          id
          name
        }
      }
    }
  }
`;
const OrderItemsCreateInput = (item) => ({
  data: {
    product: { connect: { id: item.product.id } },
    price: item.price,
    quantity: item.quantity,
  },
});
const OrderItemsCreateInputs = (cartItems) =>
  cartItems.map((item) => OrderItemsCreateInput(item));
export function List() {
  const { data: dataCartItems, loading, error } = useQuery(CART);
  const [createOrderItems] = useMutation(CREATE_ORDER_ITEMS);
  const [createOrder] = useMutation(CREATE_ORDER);
  const router = useRouter();

  const order = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const customer = customerVar();
    const data = OrderItemsCreateInputs(dataCartItems?.cartItems);

    if (data?.length) {
      data.map(
        (data) => (data.data.ofSeller = { connect: { id: page.seller.id } })
      );
      const { data: dataCreateOrderItems, error } = await createOrderItems({
        variables: {
          data,
        },
      });
      console.log(dataCreateOrderItems);

      if (dataCreateOrderItems.createOrderItems) {
        let variables = {
          items: dataCreateOrderItems.createOrderItems.map((e) => ({
            id: e.id,
          })),
          customer: { id: customer.id },
          ofSeller: { id: page.seller.id },
        };
        try {
          const { data: dataCreateOrder, errors: ER } = await createOrder({
            variables,
          });
          newOrderVar(true);
          newOrderCountVar(true);
          emptyCart();
          router.push({ pathname: "/order" });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  if (loading) return <i>loading...</i>;
  return (
    <div>
      <button onClick={order}>order</button>
      <button onClick={empty}>empty cart</button>
      {dataCartItems ? (
        dataCartItems?.cartItems?.length === 0 ? (
          <p>No items in your cart</p>
        ) : (
          dataCartItems?.cartItems?.map((cartItem) => {
            return <CartItem key={cartItem.product.id} cartItem={cartItem} />;
          })
        )
      ) : null}
    </div>
  );
}
