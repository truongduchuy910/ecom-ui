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
import { useRouter } from "next/router";

export const Item = ({ product }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <FadeIn>
      <div
        style={{
          ...css.box,
          padding: 0,
          position: "relative",
        }}
      >
        <ImgProduct
          product={product}
          style={{
            marginBottom: 0,
            borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0px 0px`,
          }}
          onClick={() => {
            router.push({
              pathname: "detail",
              query: { detail: product.url },
            });
          }}
        />
        <div style={{ padding: theme.spacing(2) }}>
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
                  textTransform: "capitalize",
                }}
              >
                {product.name}
              </p>
            </a>
          </Link>
          <p
            style={{
              textDecoration: product.sale ? "line-through" : "",
              color: product.sale ? theme.secondary : theme.primary,
              fontSize: product.sale ? "0.8rem" : "0.85rem",
              float: product.sale ? "right" : "default",
              fontWeight: product.sale ? "normal" : "bold",
              marginBottom: theme.spacing(0),
              wordWrap: "break-word",
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
                fontSize: "0.85rem",
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
      </div>
    </FadeIn>
  );
};
