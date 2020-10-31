import { useRouter } from "next/router";
import { toAttributeGourpWhereInput, formatMoney } from "../../lib/chip";
import { useState, useRef, useCallback, useContext } from "react";
import { List as Attributes } from "../Attribute/list";
import { List as Categories } from "../Category/list";
import { List as Brands } from "../Brand/list";
import { List as Hashtags } from "../Hashtag/list";
import { Search } from "../Search/index";

import { IoIosSearch, IoIosPricetag } from "react-icons/io";
import { SellerContext } from "../src/SellerProvider";

export function PostSidebar() {
  const theme = useContext(SellerContext);
  const router = useRouter();
  let query = router.query;
  //
  //
  return (
    <section>
      <div style={theme.css.box}>
        <Hashtags />
      </div>
    </section>
  );
}
