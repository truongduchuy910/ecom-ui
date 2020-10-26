import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";

import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";

import { useContext, useState } from "react";
import {
  IoIosBookmark,
} from "react-icons/io";
import { SellerContext } from "../src/SellerProvider";
const GET_CATEGORIES = gql`
  query($seller: UserWhereInput) {
    allBrands(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
export function List() {
  const theme = useContext(SellerContext);

  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { seller: theme.seller },
  });
  const [open, setOpen] = useState(false);
  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;
  return !loading && data ? (
    <div>
      <h5 style={theme.css.h5}>
        <IoIosBookmark style={theme.css.iconHeader} /> Thương Hiệu
      </h5>
      <Item brand={{ id: "all-brand", name: "Tất Cả ", url: "all" }} />
      {data?.allBrands
        ?.slice(0, open ? data?.allBrands?.lenght : 7)
        .map((brand) => (
          <Item key={brand.id} brand={brand} style={{ display: "block" }} />
        ))}
      {data?.allBrands?.length > 7 ? (
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
