// search in nav
import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "reactstrap";

export function Search() {
  const [searchInput, setSearchInput] = useState();
  const router = useRouter();
  return (
    <Form inline
      onSubmit={(e) => {
        /**
         * Prevent submit from reloading the page
         */
        e.preventDefault();
        e.stopPropagation();

        router.push({ pathname: "/products", query: { search: searchInput } });
      }}
      action=""
    >
      <input
        placeholder="search"
        name="search"
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
    </Form >
  );
}
