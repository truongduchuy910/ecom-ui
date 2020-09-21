import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "../src/Link";
import { queryVar } from "../../apollo/action";
import { page, theme } from "../../config/index";

import { Spinner, Alert } from "reactstrap";
import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";
import { css } from "../src/css";
import { IoIosColorFilter, IoIosAdd, IoIosAnalytics, IoIosCompass, IoIosCheckbox, IoIosCheckboxOutline, IoIosCheckmark, IoIosAirplane, IoIosArrowDropup, IoIosBackspace, IoIosBookmark, IoIosOptions } from "react-icons/io";
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
  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: page.seller },
  });
  const [open, setOpen] = useState(false);

  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;

  let source = attributes ? attributes : data.allAttributes;
  return !loading && data ? (
    <div>
      <h5 style={css.h5}>
        <IoIosOptions style={css.iconHeader} />
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
