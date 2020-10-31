// search in nav
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Form } from "reactstrap";
import { SellerContext } from "../src/SellerProvider";

export function Search({ style }) {
  const theme = useContext(SellerContext);
  const [searchInput, setSearchInput] = useState();
  const router = useRouter();
  return (
    <Form
      inline
      onSubmit={(e) => {
        /**
         * Prevent submit from reloading the page
         */
        e.preventDefault();
        e.stopPropagation();
        router.push({ pathname: "/products", query: { search: searchInput } });
      }}
      action=""
      style={{ ...style }}
    >
      <input
        placeholder="Tìm sản phẩm..."
        name="search"
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        style={{ ...theme.css.input, width: "100%" }}
      />
    </Form>
  );
}
