import { List as AttributeGroups } from "../AttributeGroups/listOne";
import {
  addProductToLocalCart,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { formatMoney } from "../../lib/chip";
import { Link } from "../src/Link";
import { page } from "../../config/index";

import { Tooltip } from "react-tippy";
import { useState, Fragment } from "react";

import { ImgProduct } from "./imageProduct";
import { FadeIn } from "../Animations/FadeIn";
import { theme } from "../../config/index";

import { css } from "../src/css";

export const Item = ({ product }) => {
  const [show, setShow] = useState(false);

  return (
    <FadeIn>
      <div
        style={{
          ...css.box,
          position: "relative",
        }}
      >
        <ImgProduct product={product} />
        <div style={{ minHeight: 35 }}>
          <Link
            href={{
              pathname: "detail",
              query: { detail: product.url },
            }}
          >
            <a>
              <p
                style={{
                  color: theme.color,
                  marginTop: theme.spacing(4),
                  textTransform: "capitalize",
                  minHeight: 48,
                  fontWeight: 700,
                }}
              >
                {product.name}
              </p>
            </a>
          </Link>
        </div>
        <p
          style={{
            textDecoration: product.sale ? "line-through" : "",
            color: product.sale ? theme.secondary : theme.primary,
            fontSize: product.sale ? 15 : "default",
            float: product.sale ? "right" : "default",
            fontWeight: product.sale ? "normal" : "bold",
            marginBottom: theme.spacing(0),
          }}
        >
          {formatMoney(product.price)}
        </p>

        {product.sale ? (
          <p
            style={{
              color: theme.primary,
              display: show ? "none" : "block",
              fontWeigh: "bold",
              marginBottom: theme.spacing(0),
            }}
          >
            {formatMoney(product.price - product.sale)}
          </p>
        ) : null}

        {/* <button
          onClick={() => {
            addProductToLocalCart({ product });
          }}
          style={{ marginBottom: 0 }}
        >
          Thêm vào giỏ
        </button> */}
      </div>
    </FadeIn>
  );
};
