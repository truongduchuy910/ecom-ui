import { page } from "../../config/yensaodatquang.json";

import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { MdCompareArrows, MdDoneAll } from "react-icons/md";
import {
  removeWishListItem,
  removeCompareItem,
  addProductToLocalWishlist,
  addProductToLocalCompare,
  CART,
} from "../../apollo/action";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
import { FadeIn } from "../Animations/FadeIn";
import { useSpring, animated, useSprings } from "react-spring";
import { QuickView } from "./quickView";
const style = {
  button: (top, color = "white") => ({
    position: "absolute",
    top,
    right: 5,
    padding: 3,
    paddingTop: 5,
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    color,
    fontWeight: 800,
    backgroundColor: "rgba(0,0,0,0.5)",
  }),
};
import { theme } from "../../config/yensaodatquang.json";
export function ImgProduct({ product }) {
  const { data } = useQuery(gql`
    query {
      cartItems @client
      wishlist @client
      compare @client
    }
  `);

  const isIncart = data?.cartItems?.some(
    (item) => item.product.id === product.id
  );
  const isInWishlist = data?.wishlist?.some((item) => item.id === product.id);
  const isInCompare = data?.compare?.some((item) => item.id === product.id);

  let ImgSrcs = product?.images || [];
  if (product.image) {
    ImgSrcs = [{ file: product.image }].concat(ImgSrcs);
  }
  const [imgIndex, setImgIndex] = useState(0);
  // animation
  useEffect(() => {
    window.onscroll = () => {
      toggle(false);
    };
  });
  const [open, toggle] = useState(false);
  const props = useSpring({
    position: "fixed",
    opacity: open ? 1 : 0,
    top: 0,
    left: 0,
    zIndex: 11,
    backgroundColor: theme.backgroundColor,
    padding: 13,
    paddingTop: 85,
    height: "100vh",
    display: "flex",
    from: { opacity: 0 },
  });
  return (
    <div style={{ position: "inherit" }}>
      {/* {open ? (
        <animated.div style={props}>
          <QuickView
            product={product}
            onClick={() => {
              toggle(false);
            }}
          />
        </animated.div>
      ) : null} */}
      <img
        src={
          ImgSrcs[imgIndex]
            ? page.server + ImgSrcs[imgIndex]?.file?.publicUrl
            : "/assets/img/no-image.jpg"
        }
        key={ImgSrcs[imgIndex]?.file?.publicUrl}
        onClick={() => {
          toggle(true);
        }}
      />
      {/* icon compare */}
      <i
        onClick={() =>
          isInCompare
            ? removeCompareItem(product)
            : addProductToLocalCompare(product)
        }
        style={style.button(5)}
      >
        {isInCompare ? <MdDoneAll /> : <MdCompareArrows />}
      </i>
      {/* icon wishlist */}
      <i
        onClick={() =>
          isInWishlist
            ? removeWishListItem(product)
            : addProductToLocalWishlist(product)
        }
        style={style.button(45, "white")}
      >
        {isInWishlist ? <MdDoneAll /> : <IoIosHeartEmpty />}
      </i>
    </div>
  );
}
