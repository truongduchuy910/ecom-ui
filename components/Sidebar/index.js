import { useRouter } from "next/router";
import { toAttributeGourpWhereInput } from "../../lib/chip";
import { useState, useRef } from "react";
import { List as Attributes } from "../Attribute/list";
import { List as Categories } from "../Category/list";
import { List as Brands } from "../Brand/list";
import { Search } from "../Search/index";
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import { FiFilter } from "react-icons/fi";
import { css } from "../src/css";
import theme from "../src/theme";
const box = {
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.secondary}`,
};
export function Sidebar() {
  const router = useRouter();
  let query = router.query;
  const price_from = query.price_from ? Number(query.price_from) : 0;
  const price_to = query.price_to ? Number(query.price_to) : 0;
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
  const [collapsed, setCollapsed] = useState(true);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const top = useRef(null);
  const tg = () => setCollapsed(!collapsed);
  return (
    <section>
      <div style={box}>
        <h5 style={css.h5}>Tìm Kiếm</h5>
        <Search style={{ width: "100%", marginBottom: theme.spacing(3) }} />
      </div>
      <div style={box}>
        <Categories />
      </div>
      {/* KHOANG GIA */}
      <form onSubmit={onSubmit} action="" style={box}>
        <h5 style={css.h5}>Giá</h5>

        <input
          placeholder="Từ"
          name="price_from"
          onChange={(event) => {
            setPriceFrom(event.target.value);
          }}
          defaultValue={price_from ? price_from : ""}
          style={{ ...css.input, width: "45%" }}
        />
        <div
          style={{ width: "10%", display: "inline-block", textAlign: "center" }}
        >
          -
        </div>

        <input
          placeholder="Đến"
          name="price_to"
          onChange={(event) => {
            setPriceTo(event.target.value);
          }}
          defaultValue={price_to ? price_to : ""}
          style={{ ...css.input, width: "45%" }}
        />
        <button
          type="submit"
          style={{ ...css.button, marginTop: theme.spacing(3) }}
        >
          Lọc
        </button>
      </form>
      <div style={box}>
        <Attributes />
      </div>
      <div style={box}>
        <Brands />
      </div>
    </section>
  );
}
