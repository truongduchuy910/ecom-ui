import { List as AttributeGroups } from "../AttributeGroups/listOne";
import {
  addProductToLocalCart,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { formatMoney } from "../../lib/chip";
import Link from "next/link";
import { page } from "../../config.json";
import { Tooltip } from "react-tippy";
import { useState, Fragment } from "react";

import { ImgProduct } from "./imageProduct";
import { FadeIn } from "../Animations/FadeIn";

export const Item = ({ product }) => {
  const [show, setShow] = useState(false);

  return (
    <FadeIn>
      <div style={{ position: "relative" }}>
        <ImgProduct product={product} />
        <div style={{ minHeight: 50 }}>
          <Link href={{ pathname: "detail", query: { url: product.url } }}>
            <a style={{ display: show ? "none" : "block" }}>
              <h5>{product.name}</h5>
            </a>
          </Link>
        </div>
        <h5
          style={{
            textDecoration: product.sale ? "line-through" : "",
            color: product.sale ? "var(--secondary)" : "default",
            fontSize: product.sale ? 15 : "default",
            float: product.sale ? "right" : "default",
          }}
        >
          {formatMoney(product.price)}
        </h5>

        {product.sale ? (
          <h5 style={{ display: show ? "none" : "block" }}>
            {formatMoney(product.price - product.sale)}
          </h5>
        ) : null}

        <button
          onClick={() => {
            addProductToLocalCart({ product });
          }}
          style={{ marginBottom: 0 }}
        >
          Thêm vào giỏ
        </button>
      </div>
    </FadeIn>
  );
};
