// search in sidebar
import { useState } from "react";
import { useRouter } from "next/router";

export function Search() {
  const [searchInput, setSearchInput] = useState();
  const router = useRouter();
  let query = router.query;

  return (
    <form
      onSubmit={(e) => {
        /**
         * Prevent submit from reloading the page
         */
        e.preventDefault();
        e.stopPropagation();

        query.search = searchInput;
        router.push({ query });
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
      <button type="submit">search</button>
    </form>
  );
}
