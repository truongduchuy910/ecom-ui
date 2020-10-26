import { Fragment, useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Loading } from "../src/Loading";
import { IoIosSwap } from "react-icons/io";


import { SellerContext } from "../src/SellerProvider";
// get
const GET_CUS = gql`
  query {
    allCustomers {
      id
      name
      phone
      address
    }
  }
`;

export function List() {
  const theme = useContext(SellerContext);

  const router = useRouter();
  const { data, loading, error, refetch } = useQuery(GET_CUS);
  if (loading) return <Loading />;
  if (error) return null;
  const customer = data?.allCustomers[0];

  return (
    <div
      style={{
        marginBottom: theme.spacing(3),
      }}
    >
      <h5 style={{ ...theme.css.h5, display: "inline", marginRight: 13 }}>
        Địa Chỉ Nhận.
      </h5>
      <label
        onClick={() => {
          router.push("/customer");
        }}
        style={{ cursor: "pointer", color: theme.color }}
      >
        Thay đổi <IoIosSwap />
      </label>
      {customer?.name ? (
        <Fragment>
          <a style={{ display: "block" }}>{customer.name}</a>
          <a style={{ display: "block" }}>{customer.phone}</a>
          <a style={{ display: "block" }}>{customer.address}</a>
        </Fragment>
      ) : null}
    </div>
  );
}
