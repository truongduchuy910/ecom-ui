import { useState, useEffect, Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { Item } from "./item";
import { List as ChooseCustomer } from "./ChooseCustomer";
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

export function List({ customer }) {
  const [autoSelect, setAuto] = useState(true);

  return customer?.id ? (
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
          chooseCustomer({ customer: null });
          setAuto(false);
        }}
        style={{ cursor: "pointer", color: theme.color }}
      >
        Thay đổi <IoIosSwap />
      </label>

      <a style={{ display: "block" }}>{customer.name}</a>
      <a style={{ display: "block" }}>{customer.phone}</a>
      <a style={{ display: "block" }}>{customer.address}</a>
    </div>
  ) : (
    <ChooseCustomer autoSelect={autoSelect} />
  );
}
