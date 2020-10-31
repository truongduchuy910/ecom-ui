import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { useContext, useState } from "react";
import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";

import { IoIosOptions } from "react-icons/io";
import { SellerContext } from "../src/SellerProvider";
const GET_ATTRIBUTES = gql`
  query($seller: UserWhereInput) {
    allAttributes(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
export function List({ attributes }) {
  const theme = useContext(SellerContext);

  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: theme.seller },
  });
  const [open, setOpen] = useState(false);

  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;

  let source = attributes ? attributes : data.allAttributes;
  return !loading && data ? (
    <div>
      <h5 style={theme.css.h5}>
        <IoIosOptions style={theme.css.iconHeader} />
        Thuộc Tính
      </h5>
      <Item attribute={{ id: "all-attribute", name: "Tất Cả", url: "all" }} />
      {source?.slice(0, open ? source?.lenght : 7).map((attribute) => (
        <Item key={attribute.id} attribute={attribute} />
      ))}
      {source?.length > 7 ? (
        open ? (
          <a onClick={() => setOpen(false)} style={{ color: theme.primary }}>
            Rút gọn
          </a>
        ) : (
          <a onClick={() => setOpen(true)} style={{ color: theme.primary }}>
            Xem thêm
          </a>
        )
      ) : null}
    </div>
  ) : null;
}
