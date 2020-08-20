import { useState, useEffect, Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { Item } from "./item";
import { Loading } from "../src/Loading";
import { MdCreate } from "react-icons/md";
import { IoMdAddCircleOutline, IoIosColorWand } from "react-icons/io";
import { Create } from "./create";
import { customerVar } from "../../apollo/client";
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

export function List({ createClick }) {
  const [create, setCreate] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_CUSTOMERS);
  if (loading) return <i>...</i>;
  if (error) return <i>{getErrorMessage(error)}</i>;
  return (
    <div>
      {create || data?.allCustomers.length === 0 ? (
        <Create
          onSubmit={() => {
            setCreate(false);
            try {
              refetch();
            } catch {}
          }}
        />
      ) : null}
      {data?.allCustomers.length ? (
        <Fragment>
          <h5 style={{ display: "inline", marginRight: 13 }}>
            Chọn Địa Chỉ Nhận.
          </h5>
          <label
            onClick={() => {
              setCreate(true);
            }}
            style={{ cursor: "pointer" }}
          >
            Hoặc tạo mới <IoMdAddCircleOutline />
          </label>
        </Fragment>
      ) : null}
      {data ? (
        data.allCustomers.map((customer) => (
          <Item
            key={customer.id}
            customer={customer}
            onDelete={() => {
              refetch();
            }}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
