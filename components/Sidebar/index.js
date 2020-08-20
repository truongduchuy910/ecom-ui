import { useRouter } from "next/router";
import { toAttributeGourpWhereInput } from "../../lib/chip";
import { useState, useRef } from "react";
import { List as Attributes } from "../Attribute/list";
import { List as Categories } from "../Category/list";
import { List as Brands } from "../Brand/list";
import { Search } from "../Search/index";
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import { FiFilter } from "react-icons/fi";
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
  const [collapsed, setCollapsed] = useState(true);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const top = useRef(null);
  const tg = () => setCollapsed(!collapsed);
  return (
    <div>
      {/* Filter button */}

      <Navbar expand="md">
        <div style={{ position: "fixed", bottom: 10, left: 10, zIndex: 99 }}>
          <NavbarToggler
            onClick={() => {
              tg();
              if (collapsed) scrollToRef(top);
              else {
                window.scroll({ top: 0 });
              }
            }}
            style={{
              top: 10,
              backgroundColor: "rgba(0,0,0,0.5)",
              width: 45,
              height: 45,
              borderRadius: "50%",
            }}
          >
            <FiFilter style={{ color: "white" }} />
          </NavbarToggler>
        </div>
        <div ref={top}></div>
        <Collapse isOpen={!collapsed} navbar>
          <section
            style={{ borderRight: "1px dashed black", paddingRight: 21 }}
          >
            <h5>Tìm kiếm</h5>
            <Search onSearch={tg} />
            <form onSubmit={onSubmit} action="">
              <h5>Giá từ</h5>
              <input
                placeholder="from"
                name="price_from"
                onChange={(event) => {
                  setPriceFrom(event.target.value);
                }}
                defaultValue={price_from}
              />
              <h5>Đến</h5>

              <input
                placeholder="to"
                name="price_to"
                onChange={(event) => {
                  setPriceTo(event.target.value);
                }}
                defaultValue={price_to}
              />
              <button type="submit" style={{ paddingTop: 3, paddingBottom: 3 }}>
                Lọc
              </button>
            </form>
            <Categories />
            <Attributes />
            <Brands />
          </section>
        </Collapse>
      </Navbar>
    </div>
  );
}
