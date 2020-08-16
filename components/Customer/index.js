import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { List as Customers } from "./list";
import { List as Customer } from "./list";
import { Create as CreateCustomer } from "./create";

export function Index() {
  const [create, setCreate] = useState(false);
  return (
    <div>
      {create ? <CreateCustomer /> : null}
      <h6>Chon noi nhan</h6>
      <Customers onCreate={setCreate} />
    </div>
  );
}
