import { useContext, useState,  } from "react";
import { gql, useQuery } from "@apollo/client";

import { Item } from "./item";
import { Loading } from "../src/Loading";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Create } from "./create";


import { chooseCustomer } from "../../apollo/action";
import { SellerContext } from "../src/SellerProvider";

// get
const GET_CUSTOMERS = gql`
  query {
    customer @client
    allCustomers {
      id
      name
      phone
      address
    }
  }
`;

export function List({ autoSelect }) {
  const theme = useContext(SellerContext);

  const [create, setCreate] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_CUSTOMERS);
  if (loading || error || !data) return <Loading />;
  const { customer, allCustomers } = data;

  // default first customer
  if (!customer?.id && allCustomers?.length && autoSelect)
    chooseCustomer({ customer: allCustomers[0] });

  return !autoSelect && allCustomers?.length ? (
    <div
      style={{
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(3),
      }}
    >
      {create ? (
        <Create
          onCreate={({ customer }) => {
            refetch();
            chooseCustomer({ customer });
          }}
        />
      ) : null}
      <h5 style={{ ...theme.css.h5, display: "inline", marginRight: 13 }}>
        Chọn địa chỉ bên dưới
      </h5>
      <label
        onClick={() => {
          setCreate(true);
        }}
        style={{ cursor: "pointer", color: theme.color }}
      >
        Hoăc tạo mới <IoIosAddCircleOutline />
      </label>
      {allCustomers.map((customer) => (
        <Item
          key={customer.id}
          customer={customer}
          onDelete={() => {
            refetch();
          }}
        />
      ))}
    </div>
  ) : (
    <Create
      onCreate={({ customer }) => {
        refetch();
        chooseCustomer({ customer });
      }}
    />
  );
}
