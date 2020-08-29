import { useState, useEffect, Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { Item } from "./item";
import { Loading } from "../src/Loading";
import { MdCreate, MdChangeHistory, MdTrackChanges } from "react-icons/md";
import {
  IoMdAddCircleOutline,
  IoIosColorWand,
  IoIosSwap,
} from "react-icons/io";
import { Create } from "./create";
import { customerVar } from "../../apollo/client";
import { Link } from "../src/Link";
import theme from "../src/theme";
import { css } from "../src/css";
import { chooseCustomer } from "../../apollo/action";
import { useRouter } from "next/router";
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
      <h5 style={{ ...css.h5, display: "inline", marginRight: 13 }}>
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
