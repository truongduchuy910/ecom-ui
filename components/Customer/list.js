import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { Item } from "./item";
import { Loading } from "../src/Loading";
import { refetchCustomer } from "../../apollo/client";
// get
const GET_CUSTOMERS = gql`
  query {
    allCustomers {
      id
      name
      phone
      address
    }
  }
`;

export function List({ onCreate }) {
  const { data, loading, error, refetch } = useQuery(GET_CUSTOMERS);

  if (loading) return <i>...</i>;
  if (error) return <i>{getErrorMessage(error)}</i>;
  refetchCustomer(refetch);
  return (
    <div>
      <button onClick={() => onCreate(true)}>create</button>
      {data ? (
        data.allCustomers.map((customer) => (
          <Item key={customer.id} customer={customer} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
