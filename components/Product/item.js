import { formatMoney } from "../../lib/chip";
import { Link } from "../src/Link";

import { useState, Fragment, useContext } from "react";

import { ImgProduct } from "./imageProduct";
import { FadeIn } from "../Animations/FadeIn";
import ReactGA from "react-ga";
import { useRouter } from "next/router";
import { SellerContext } from "../src/SellerProvider";

export const Item = ({ product }) => {
  const theme = useContext(SellerContext);
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <FadeIn>
      <div
        style={{
          ...theme.css.box,
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
              pathname: "/detail",
              query: { detail: product.url },
            });
          }}
        />
        <div
          style={{ padding: theme.spacing(2) }}
          onClick={() => {
            const event = {
              category: "Product",
              action: "view",
              value: product.name,
            };
            console.log(event);
            ReactGA.event(event);
          }}
        >
          <Link
            href={{
              pathname: "/detail",
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
