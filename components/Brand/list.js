import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { page, theme } from "../../config/index";

import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";
import { css } from "../src/css";
import { useState } from "react";
import {
  IoIosArchive,
  IoIosStarOutline,
  IoIosCheckbox,
  IoIosCheckmark,
  IoIosCheckboxOutline,
  IoIosContact,
  IoIosHome,
  IoIosAdd,
  IoIosFlag,
  IoIosFlashlight,
  IoIosBusiness,
  IoIosCash,
  IoIosDesktop,
  IoIosOptions,
  IoIosBookmark,
} from "react-icons/io";
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
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { seller: page.seller },
  });
  const [open, setOpen] = useState(false);
  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;
  return !loading && data ? (
    <div>
      <h5 style={css.h5}>
        <IoIosBookmark style={css.iconHeader} /> Thương Hiệu
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
