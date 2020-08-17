import { List as AttributeGroups } from "../AttributeGroups/listOne";
import {
  addProductToLocalCart,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { formatMoney } from "../../lib/chip";
import Link from "next/link";
import { page } from "../../config";
import { Tooltip } from "react-tippy";
import { useState, Fragment } from "react";
import { useSpring, animated } from "react-spring";
import { ImgProduct } from "./imageProduct";


export const Item = ({ product }) => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginBottom: 13 }}>
      <ImgProduct product={product} />
      <div style={{ minHeight: 50 }}>
        <Link as={"/products/" + product.url} href="/products/[slug]">
          <a style={{ display: show ? "none" : "block" }}>
            <h5>{product.name}</h5>
          </a>
        </Link>
      </div>
      <p style={{ display: show ? "none" : "block" }}>
        {formatMoney(product.price)}
      </p>

      <button
        onClick={() => {
          addProductToLocalCart({ product });
        }}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};
