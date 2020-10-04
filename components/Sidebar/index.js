import { useRouter } from "next/router";
import { toAttributeGourpWhereInput, formatMoney } from "../../lib/chip";
import { useState, useRef, useCallback, useContext } from "react";
import { List as Attributes } from "../Attribute/list";
import { List as Categories } from "../Category/list";
import { List as Brands } from "../Brand/list";
import { Search } from "../Search/index";


import {
  IoIosSearch,
  IoIosPricetag,

} from "react-icons/io";
import { SellerContext } from "../src/SellerProvider";

export function Sidebar() {
  
  const theme = useContext(SellerContext);
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
  const top = useRef(null);
  return (
    <section>
      {/* <div
        style={{
          height: "90vh",
          overflowY: "scroll",
          direction: "rtl",
          paddingLeft: theme.spacing(3),
        }}
      >
        <div
          style={{
            direction: "ltr",
          }}
        > */}
      <div style={theme.css.box}>
        <h5 style={theme.css.h5}>
          <IoIosSearch style={theme.css.iconHeader} />
          Tìm Kiếm
        </h5>
        <Search style={{ width: "100%", marginBottom: theme.spacing(3) }} />
      </div>
      <div style={theme.css.box}>
        <Categories />
      </div>
      {/* KHOANG GIA */}

      <form onSubmit={onSubmit} action="" style={theme.css.box}>
        <h5 style={theme.css.h5}>
          <IoIosPricetag style={theme.css.iconHeader} />
          Giá
        </h5>
        {theme.prices.map((price, index) => {
          const choosed = Number(query.price_to) === price;
          return (
            <div
              key={index}
              style={{
                fontSize: "0.8rem",
                borderRadius: theme.spacing(1),
                padding: theme.spacing(1),
                marginBottom: theme.spacing(3),
                textAlign: "center",
                // border: `1px solid ${theme.color}`,
                cursor: "pointer",
                fontWeight: choosed ? 700 : 300,
                color: choosed ? theme.primary : theme.color,
              }}
              onClick={() => {
                query.price_from = index > 0 ? theme.prices[index - 1] : 0;
                query.price_to = price;
                router.push({ query });
              }}
            >
              {index > 0 ? formatMoney(theme.prices[index - 1]) : 0}
              {" - "}
              {formatMoney(price)}
            </div>
          );
        })}
      </form>
      <div style={theme.css.box}>
        <Attributes />
      </div>
      <div style={theme.css.box}>
        <Brands />
      </div>
      {/* </div> */}

      {/* </div> */}
    </section>
  );
}
