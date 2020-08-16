import { useRouter } from "next/router";
import { toAttributeGourpWhereInput } from "../../lib/chip";
import { useState } from "react";
import { List as Attributes } from "../Attribute/list";
import { List as Categories } from "../Category/list";
import { List as Brands } from "../Brand/list";
import { Search } from "../Search/sidebar";
export function Sidebar() {
  const router = useRouter();
  let query = router.query;
  const price_from = query.price_from ? Number(query.price_from) : 0;
  const price_to = query.price_to ? Number(query.price_to) : 999999999;
  //
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(99999999);
  //
  const onSubmit = (e) => {
    /**
     * Prevent submit from reloading the page
     */
    e.preventDefault();
    e.stopPropagation();
    query.price_from = priceFrom;
    query.price_to = priceTo;
    router.push({ query });
  };
  return (
    <section>
      <Search />
      <form onSubmit={onSubmit} action="">
        <input
          placeholder="from"
          name="price_from"
          onChange={(event) => {
            setPriceFrom(event.target.value);
          }}
          defaultValue={price_from}
        />
        <input
          placeholder="to"
          name="price_to"
          onChange={(event) => {
            setPriceTo(event.target.value);
          }}
          defaultValue={price_to}
        />
        <button type="submit">filter</button>
      </form>
      <Categories />
      <Attributes />
      <Brands />
    </section>
  );
}
