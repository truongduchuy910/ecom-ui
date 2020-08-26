import { gql, useQuery, useMutation } from "@apollo/client";

import { emptyCart } from "../../apollo/action";
import {
  customerVar,
  newOrderVar,
  newOrderCountVar,
} from "../../apollo/client";
import { Item as CartItem } from "./item";
import { useRouter } from "next/router";
import { page } from "../../config/index";

import { formatMoney } from "../../lib/chip";
import { Fragment } from "react";
import { css } from "../src/css";
import theme from "../src/theme";
export const CART = gql`
  query {
    cartItems @client
    customer @client
  }
`;
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
    $total: Int
  ) {
    createOrder(
      data: {
        customer: { connect: $customer }
        items: { connect: $items }
        ofSeller: { connect: $ofSeller }
        total: $total
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
  if (loading) return <Loading />;
  const [createOrderItems] = useMutation(CREATE_ORDER_ITEMS);
  const [createOrder] = useMutation(CREATE_ORDER);
  const router = useRouter();
  const customer = dataCartItems?.customer;
  console.log(customer);
  const order = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dataOICI = OrderItemsCreateInputs(dataCartItems?.cartItems);

    if (dataOICI?.length && customer?.id) {
      dataOICI.map(
        (data) => (data.data.ofSeller = { connect: { id: page.seller.id } })
      );
      const { data: dataCreateOrderItems, error } = await createOrderItems({
        variables: {
          data: dataOICI,
        },
      });

      if (dataCreateOrderItems.createOrderItems) {
        let variables = {
          items: dataCreateOrderItems.createOrderItems.map((e) => ({
            id: e.id,
          })),
          customer: { id: customer.id },
          ofSeller: { id: page.seller.id },
          total: sum,
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

  let sum = 0;
  dataCartItems?.cartItems?.map((cartItem) => {
    sum += cartItem.price;
  });
  return (
    <div>
      <h5 style={css.h5}>Thông Tin Người Nhận</h5>
      <div style={{ marginBottom: theme.spacing(3) }}>
        {customer?.id ? (
          <Fragment>
            <a style={css.a}>{customer.name}</a>
            <a style={css.a}>{customer.phone}</a>
            <a style={css.a}>{customer.address}</a>
          </Fragment>
        ) : (
          "Bạn chưa chọn địa chỉ nhận."
        )}
      </div>
      <h5 style={css.h5}>Tổng</h5>
      <p>{formatMoney(sum)}</p>
      <button
        style={{ ...css.button, marginBottom: theme.spacing(4) }}
        onClick={order}
      >
        Đặt Hàng
      </button>
      {dataCartItems ? (
        dataCartItems?.cartItems?.length === 0 ? (
          <p>Bạn chưa chọn sản phẩm nào!</p>
        ) : (
          dataCartItems?.cartItems?.map((cartItem) => {
            return <CartItem key={cartItem.product.id} cartItem={cartItem} />;
          })
        )
      ) : null}
    </div>
  );
}
