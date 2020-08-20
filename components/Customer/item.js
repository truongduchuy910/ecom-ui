import { Fragment, useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { chooseCustomer } from "../../apollo/action";
import { compose } from "redux";
import { CUSTOMER } from "../../apollo/action";
import { CustomInput } from "reactstrap";
const DELETE_CUSTOMER = gql`
  mutation($id: ID!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`;
export function Item({ customer, onDelete, hight = false, onClick }) {
  const [high, setHight] = useState(false);
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
          border: "1px solid black",
          padding: 13,
          position: "relative",
        }}
      >
        <div
          onClick={() => {
            try {
              chooseCustomer({ customer });
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <a>{customer.name}</a>
          <a>{customer.phone}</a>
          <a># {customer.address}</a>
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
