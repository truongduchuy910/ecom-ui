import { gql, useQuery, useMutation } from "@apollo/client";

import { emptyCart } from "../../apollo/action";
import {
  customerVar,
  newOrderVar,
  newOrderCountVar,
} from "../../apollo/client";
import { Item as CartItem } from "./item";
import { List } from "./list";
import { useRouter } from "next/router";
import { page } from "../../config/index";

import { formatMoney, getErrorMessage } from "../../lib/chip";
import { Fragment } from "react";
import { css } from "../src/css";
import { theme } from "../../config/index";

import { Loading } from "../src/Loading";
import { Link } from "../src/Link";
import { List as Customer } from "../Customer/CurrentCustomer";
import { QuickCart } from "./quickCart";
import { Row, Col } from "reactstrap";
export const CART = gql`
  query {
    cartItems @client
    user @client
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
export const OrderItemsCreateInput = (item) => ({
  data: {
    product: { connect: { id: item.product.id } },
    price: item.price,
    quantity: item.quantity,
  },
});
export const OrderItemsCreateInputs = (cartItems = []) =>
  cartItems?.map((item) => OrderItemsCreateInput(item));

export const order = async ({
  createOrderItems,
  createOrder,
  dataOICI,
  page,
  customer,
  sum,
  router,
}) => {
  // create cart items
  const { data: dataCOI, error } = await createOrderItems({
    variables: {
      data: dataOICI,
    },
  });
  console.log(dataCOI);
  // creat cart and connect cart items
  if (dataCOI.createOrderItems) {
    let variables = {
      items: dataCOI.createOrderItems.map((e) => ({
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
      console.log(dataCreateOrder);

      newOrderVar(true);
      newOrderCountVar(true);
      emptyCart();
      router.push({
        pathname: "/order",
        query: { createOrderId: dataCreateOrder?.createOrder?.id },
      });
    } catch {}
  }
};
export function Cart() {
  const router = useRouter();
  // query
  const { data: cartData, loading, error } = useQuery(CART);
  // mutation
  const [createOrderItems] = useMutation(CREATE_ORDER_ITEMS);
  const [createOrder] = useMutation(CREATE_ORDER);

  if (loading || error || !cartData) return <Loading />;

  const { customer, cartItems, user } = cartData;
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
    <Row>
      <Col>
        {/* CUSTOMER */}
        {user?.id ? (
          <div>
            <Customer customer={customer} />
          </div>
        ) : (
          <div
            style={{
              paddingBottom: theme.spacing(3),
            }}
          >
            <Link
              href={{ pathname: "/signin", query: { redirect: "/cart" } }}
              style={{ marginBottom: theme.spacing(4), display: "block" }}
            >
              Mua hàng với tài khoản (Khuyên dùng)
            </Link>
            <QuickCart cartItems={cartItems} />
          </div>
        )}{" "}
        {/* LIST CART ITEM */}
        <List cartItems={cartItems} />
        {/* CREATE BUTTON */}
        {dataOICI?.length && user ? (
          <button
            style={css.button}
            onClick={() => {
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
          >
            Xác nhận đơn hàng
          </button>
        ) : null}
      </Col>
    </Row>
  );
}
