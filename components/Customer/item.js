import { Fragment, useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { chooseCustomer } from "../../apollo/action";
import { compose } from "redux";
import { CUSTOMER } from "../../apollo/action";
import { CustomInput } from "reactstrap";
import { theme } from "../../config/index";

import { useRouter } from "next/router";
import { refetchCustomer } from "../../apollo/client";
const DELETE_CUSTOMER = gql`
  mutation($id: ID!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`;
export function Item({ customer, onDelete, hight = false }) {
  const router = useRouter();
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER);
  const { data } = useQuery(CUSTOMER);
  const deleteCus = async (id) => {
    try {
      const { data } = await deleteCustomer({ variables: { id } });
      onDelete();
    } catch (e) {}
  };
  return (
    <Fragment>
      <div
        style={{
          fontWeight: data?.customer?.id === customer.id ? "bold" : "",
          marginBottom: 13,
          border: `1px solid ${theme.color}`,
          padding: 13,
          position: "relative",
          borderRadius: theme.spacing(1),
        }}
      >
        <div
          onClick={() => {
            try {
              chooseCustomer({ customer });
              router.push("/cart");
            } catch (e) {
              console.log(e);
            }
          }}
          style={{ color: theme.color }}
        >
          <a style={{ display: "block" }}>{customer.name}</a>
          <a style={{ display: "block" }}>{customer.phone}</a>
          <a style={{ display: "block" }}># {customer.address}</a>
        </div>
        <a
          style={{
            color: "var(--secondary)",
            position: "absolute",
            top: 0,
            right: 5,
          }}
          onClick={() => {
            deleteCus(customer.id);
          }}
        >
          Gỡ
        </a>
      </div>
    </Fragment>
  );
}
