import { useContext, useState } from "react";

import { List as ChooseCustomer } from "./ChooseCustomer";
import { IoIosSwap } from "react-icons/io";


import { chooseCustomer } from "../../apollo/action";
import { SellerContext } from "../src/SellerProvider";

export function List({ customer }) {
  const theme = useContext(SellerContext);

  const [autoSelect, setAuto] = useState(true);

  return customer?.id ? (
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
